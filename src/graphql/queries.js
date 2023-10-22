/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipeData = /* GraphQL */ `
  query GetRecipeData($id: ID!) {
    getRecipeData(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRecipeData = /* GraphQL */ `
  query ListRecipeData(
    $filter: ModelRecipeDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
