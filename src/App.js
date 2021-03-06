// src/App.js

import React from "react";
// import { Grid, Header, Input, List, Segment } from "semantic-ui-react";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import sortBy from "lodash/sortBy";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { Home } from "./Main/Home";
import { Login } from "./Login/Login";
import "./styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// const NewProperty = () => {
//   const [propertyName, setPropertyName] = React.useState("");
//   const handleSubmit = () => {
//     console.log(`Creating property ${propertyName} `);
//     setPropertyName("");
//   };
//   const handleChange = event => {
//     setPropertyName(event.target.value);
//   };
//   return (
//     <Segment>
//       <Header as="h3">Add a new property</Header>
//       <Input
//         type="text"
//         placeholder="New Property Name"
//         icon="plus"
//         iconPosition="left"
//         action={{ content: "Create", onClick: handleSubmit }}
//         name="propertyName"
//         value={propertyName}
//         onChange={handleChange}
//       />
//     </Segment>
//   );
// };

// const PropertyList = ({ properties = [] }) => {
//   return (
//     <Segment>
//       <Header as="h3">My Propeties</Header>
//       <List divided relaxed>
//         {sortBy(properties, ["createdAt"]).map(property => (
//           <List.Item key={property.id}>
//             <NavLink to={`/properties/${property.id}`}>{property.name}</NavLink>
//           </List.Item>
//         ))}
//       </List>
//     </Segment>
//   );
// };
// const PropertyDetailsLoader = ({ id }) => {
//   const [isLoading] = React.useState(true);
//   const [property] = React.useState({});
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   return <PropertyDetails property={property} />;
// };

// const PropertyDetails = ({ property }) => {
//   return (
//     <Segment>
//       <Header as="h3">{property.name}</Header>
//       <p>TODO: Allow lease uploads</p>
//       <p>TODO: Show leases for this property</p>
//     </Segment>
//   );
// };

// const PropertyListLoader = () => {
//   const [isLoading] = React.useState(true);
//   const [properties] = React.useState([]);
//   if (isLoading) return null;
//   return <PropertyList properties={properties} />;
// };

export default function App() {
  const { user } = useAuthenticator();

  if (user) {
    return <Home />;
  }

  return <Login />;
}



// const App = () => {
  // return (
  //   <Router>
  //     <Grid padded>
  //       <Grid.Column>
  //         <Route path="/" exact component={NewProperty} />
  //         <Route path="/" exact component={PropertyListLoader} />

  //         <Route
  //           path="/properties/:propertyId"
  //           render={() => (
  //             <div>
  //               <NavLink to="/">Back to Properties list</NavLink>
  //             </div>
  //           )}
  //         />
  //         <Route
  //           path="/properties/:propertyId"
  //           render={props => (
  //             <PropertyDetailsLoader id={props.match.params.propertyId} />
  //           )}
  //         />
  //       </Grid.Column>
  //     </Grid>
  //   </Router>
  // );
// };

// export default withAuthenticator(App, { includeGreetings: true });