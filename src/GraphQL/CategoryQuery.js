import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getPosts {
    getCategories {
      id
      title
      description
      file {
        fileUrl
      }
    }
  }
`;
