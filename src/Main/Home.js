import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { v4 as uuid } from "uuid";
import { Grid, Header, Input, List, Segment, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import sortBy from "lodash/sortBy";
import { onCreateProperty } from "./graphql/subscriptions";
import { listPropertys, getProperty } from "./graphql/queries";
import { createProperty } from "./graphql/mutations";
import API, { graphqlOperation } from "@aws-amplify/api";
import Amplify, { Auth, Storage } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const NewProperty = () => {
  const [propertyName, setPropertyName] = React.useState("");
  const handleSubmit = async () => {
    console.log(`Creating property ${propertyName} `);
    await API.graphql(
      graphqlOperation(createProperty, {
        input: {
          name: propertyName,
          address: "",
          createdAt: `${Date.now()}`
        }
      })
    );
    setPropertyName("");
  };
  const handleChange = event => {
    setPropertyName(event.target.value);
  };
  return (
    <Segment>
      <Header as="h3">Add a new property</Header>
      <Input
        type="text"
        placeholder="New Property Name"
        icon="plus"
        iconPosition="left"
        action={{ content: "Create", onClick: handleSubmit }}
        name="propertyName"
        value={propertyName}
        onChange={handleChange}
      />
    </Segment>
  );
};
const PropertiesList = ({ properties = [] }) => {
  return (
    <Segment>
      <Header as="h3">My Properties</Header>
      <List divided relaxed>
        {sortBy(properties, ["createdAt"]).map(property => (
          <List.Item key={property.id}>
            <NavLink to={`/properties/${property.id}`}>{property.name}</NavLink>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

const PropertyDetailsLoader = ({ id }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [property, setProperty] = React.useState({});

  React.useEffect(() => {
    setIsLoading(true);
    API.graphql(graphqlOperation(getProperty, { id })).then(propertyDetails => {
      setIsLoading(false);
      setProperty(propertyDetails.data.getProperty);
    });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <PropertyDetails property={property} />;
};
const PropertyDetails = ({ property }) => {
  return (
    <Segment>
      <Header as="h3">{property.name}</Header>
      <S3LeaseUpload property={property} />
      <p>TODO: Show leases for this property</p>
    </Segment>
  );
};
  
  const PropertiesListLoader = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [properties, setProperties] = React.useState([]);
    React.useEffect(() => {
      setIsLoading(true);
      // Get initial properties list
      API.graphql(graphqlOperation(listPropertys)).then(albs => {
        setProperties(albs.data.listPropertys.items);
        setIsLoading(false);
      });
  
      Auth.currentAuthenticatedUser().then(user => {
        // Listen to new properties being added
        API.graphql(
          graphqlOperation(onCreateProperty, { owner: user.username })
        ).subscribe(newProperty => {
          const propertyRecord = newProperty.value.data.onCreateProperty;
          setProperties(albs => [...albs, propertyRecord]);
        });
      });
    }, []);
    if (isLoading) return null;
    return <PropertiesList properties={properties} />;
  };

  const uploadFile = async (event, propertyId) => {
    const {
      target: { value, files }
    } = event;
    const user = await Auth.currentAuthenticatedUser();
    const fileForUpload = files[0];
    const file = fileForUpload || value;
    const extension = file.name.split(".")[1];
    const { type: mimeType } = file;
    const key = `leases/${uuid()}${propertyId}.${extension}`;
    console.log(user, fileForUpload, file, extension, mimeType, key)
    try {
      await Storage.put(key, file, {
        contentType: mimeType,
        metadata: {
          owner: user.username,
          propertyId
        }
      });
      console.log("successfully uploaded lease!");
    } catch (err) {
      console.log("error: ", err);
    }
  };
  
  const S3LeaseUpload = ({ propertyId }) => {
    const [isUploading, setIsUploading] = React.useState(false);
    const onChange = async event => {
      setIsUploading(true);
  
      let files = [];
      for (var i = 0; i < event.target.files.length; i++) {
        files.push(event.target.files.item(i));
      }
      await Promise.all(files.map(f => uploadFile(event, propertyId)));
  
      setIsUploading(false);
    };
    return (
      <div>
        <Form.Button
          onClick={() => document.getElementById("add-lease-file-input").click()}
          disabled={isUploading}
          icon="file outline"
          content={isUploading ? "Uploading..." : "Add Leases"}
        />
        <input
          id="add-lease-file-input"
          type="file"
          accept="lease/*"
          multiple
          onChange={onChange}
          style={{ display: "none" }}
        />
      </div>
    );
  };
  



  const UserContext = React.createContext({ username: null });

  export function Home() {
    const { signOut, user } = useAuthenticator();
    // return (

    return (
      <UserContext.Provider value={user}>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>

        <Router>
          <Grid padded>
            <Grid.Column>
              <Route path="/" exact component={NewProperty} />
              <Route path="/" exact component={PropertiesListLoader} />
    
              <Route
                path="/properties/:propertyId"
                render={() => (
                  <div>
                    <NavLink to="/">Back to Properties list</NavLink>
                  </div>
                )}
              />
              <Route
                path="/properties/:propertyId"
                render={props => (
                  <PropertyDetailsLoader id={props.match.params.propertyId} />
                )}
              />
            </Grid.Column>
          </Grid>
        </Router>
        </UserContext.Provider>
    );
    // );
}