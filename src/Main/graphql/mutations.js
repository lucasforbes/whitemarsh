/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = `mutation CreateProperty(
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
  export const updateProperty = `mutation UpdateProperty(
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
  export const deleteProperty = `mutation DeleteProperty(
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
  export const createUnit = `mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
      id
      property {
        id
        name
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
  export const updateUnit = `mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
  export const deleteUnit = `mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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