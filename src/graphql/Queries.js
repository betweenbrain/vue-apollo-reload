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

export const GetCategories = gql`
query GetCategories($first: Int!) {
    categories(first: $first){
      edges{
        node{
          categoryId
          name
        }
      }
    }
  }
`;
