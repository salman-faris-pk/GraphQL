import { gql } from "@apollo/client"



export const QUERY_ALL_USERS=gql`
     query GetAllUsers {
       users {
         id
         name
         age
         username
         nationality
         friends {
            id
            name
         }
       }
     }
`;


export const QUERY_ALL_MOVIES=gql`
    query GetAllMovies {
      movies {
       id
       name
       yearOfPublication
       isInTheaters
      }
    }
`;


export const MOVIES_BY_NAME=gql`
   query Movie($name: String!) {
     movie(name: $name) {
         name
         yearOfPublication
     }
   }
`;



export const USER_MUTATION = gql`
  mutation CreateUser ($input : CreateUserInput!) {
    createUser(input: $input){
      name
      username
      age
      nationality
    }
  }
`;