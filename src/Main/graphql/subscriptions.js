/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = `subscription OnCreateProperty($owner: String!) {
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
          labels
          owner
        }
        nextToken
      }
      owner
    }
  }
  `;
  export const onUpdateProperty = `subscription OnUpdateProperty($owner: String!) {
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
          labels
          owner
        }
        nextToken
      }
      owner
    }
  }
  `;
  export const onDeleteProperty = `subscription OnDeleteProperty($owner: String!) {
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
          labels
          owner
        }
        nextToken
      }
      owner
    }
  }
  `;
  export const onCreateUnit = `subscription OnCreateUnit($owner: String!) {
    onCreateUnit(owner: $owner) {
      id
      property {
        id
        name
        address
        createdAt
        units {
          nextToken
        }
        owner
      }
      bucket
      name
      unitIdentifier
      createdAt
      labels
      owner
    }
  }
  `;
  export const onUpdateUnit = `subscription OnUpdateUnit($owner: String!) {
    onUpdateUnit(owner: $owner) {
      id
      property {
        id
        name
        address
        createdAt
        units {
          nextToken
        }
        owner
      }
      bucket
      name
      unitIdentifier
      createdAt
      labels
      owner
    }
  }
  `;
  export const onDeleteUnit = `subscription OnDeleteUnit($owner: String!) {
    onDeleteUnit(owner: $owner) {
      id
      property {
        id
        name
        address
        createdAt
        units {
          nextToken
        }
        owner
      }
      bucket
      name
      unitIdentifier
      createdAt
      labels
      owner
    }
  }
  `;