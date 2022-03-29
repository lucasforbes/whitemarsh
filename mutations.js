/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
