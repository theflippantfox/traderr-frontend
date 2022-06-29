import { gql } from "graphql-tag";

export const LOGIN = gql`
  mutation LoginUser($data: LoginInput!) {
    loginUser(data: $data)
  }
`

export const SIGNUP = gql`
  mutation SignupUser($data: SignupInput!) {
    signupUser(data: $data)
  }
`