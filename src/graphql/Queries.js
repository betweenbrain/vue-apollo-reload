import gql from 'graphql-tag';

export const GetPosts = gql`
  query GetPosts($first: Int!) {
    posts(first: $first) {
      edges {
        node {
          author {
            name
          }
          postId
          title
        }
      }
    }
  }
`;
