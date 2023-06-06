import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      authorId
      content
      published
      content
      title
      updatedAt
      createdAt
    }
  }
`;