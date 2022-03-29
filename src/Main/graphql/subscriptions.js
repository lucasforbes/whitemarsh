/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty($owner: String!) {
    onCreateProperty(owner: $owner) {
      id
      name
      address
      createdAt
      units {
        items {
          id
          bucket
          name
          unitIdentifier
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty($owner: String!) {
    onUpdateProperty(owner: $owner) {
      id
      name
      address
      createdAt
      units {
        items {
          id
          bucket
          name
          unitIdentifier
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty($owner: String!) {
    onDeleteProperty(owner: $owner) {
      id
      name
      address
      createdAt
      units {
        items {
          id
          bucket
          name
          unitIdentifier
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit($owner: String!) {
    onCreateUnit(owner: $owner) {
      id
      Property {
        id
        name
        address
        createdAt
        units {
          nextToken
        }
        updatedAt
        owner
      }
      bucket
      name
      unitIdentifier
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit($owner: String!) {
    onUpdateUnit(owner: $owner) {
      id
      Property {
        id
        name
        address
        createdAt
        units {
          nextToken
        }
        updatedAt
        owner
      }
      bucket
      name
      unitIdentifier
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit($owner: String!) {
    onDeleteUnit(owner: $owner) {
      id
      Property {
        id
        name
        address
        createdAt
        units {
          nextToken
        }
        updatedAt
        owner
      }
      bucket
      name
      unitIdentifier
      createdAt
      updatedAt
      owner
    }
  }
`;
