/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Property {
          id
          name
          address
          createdAt
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
      nextToken
    }
  }
`;
