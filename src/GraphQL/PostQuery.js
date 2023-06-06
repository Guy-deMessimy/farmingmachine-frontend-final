import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
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

export const CREATE_POST = gql`
  mutation CreatePost($content: String!, $title: String!, $authorId: Int!) {
    createPost(content: $content, title: $title, authorId: $authorId) {
      content
      title
    }
  }
`;
