/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = `query GetProperty($id: ID!) {
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
          labels
          owner
        }
        nextToken
      }
      owner
    }
  }
  `;
  export const listProperties = `query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        createdAt
        units {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
  `;
  export const getUnit = `query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
  export const listUnits = `query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        property {
          id
          name
          address
          createdAt
          owner
        }
        bucket
        name
        unitIdentifier
        createdAt
        labels
        owner
      }
      nextToken
    }
  }
  `;
  export const convertImageToText = `query ConvertImageToText($input: ConvertImageToTextInput!) {
    convertImageToText(input: $input)
  }
  `;