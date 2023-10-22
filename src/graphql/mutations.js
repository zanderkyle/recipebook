/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipeData = /* GraphQL */ `
  mutation CreateRecipeData(
    $input: CreateRecipeDataInput!
    $condition: ModelRecipeDataConditionInput
  ) {
    createRecipeData(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRecipeData = /* GraphQL */ `
  mutation UpdateRecipeData(
    $input: UpdateRecipeDataInput!
    $condition: ModelRecipeDataConditionInput
  ) {
    updateRecipeData(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRecipeData = /* GraphQL */ `
  mutation DeleteRecipeData(
    $input: DeleteRecipeDataInput!
    $condition: ModelRecipeDataConditionInput
  ) {
    deleteRecipeData(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
