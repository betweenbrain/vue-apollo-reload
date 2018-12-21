import gql from 'graphql-tag';

export const GetPostById = gql`
query GetPostsByID($id: ID!) {
  postBy(postId: $id){
    author{
      name
    }
    content
    postId
    title
  }
}
`;
