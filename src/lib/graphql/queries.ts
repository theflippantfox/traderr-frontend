import { gql } from 'graphql-tag'

export const CURRENT_USER = gql`
  query CurrentUser {
  currentUser {
    id
    balance
    email
    username
    fullName
    profilePic
    numOfTrades
    numOfWins
    accuracy
    totalPnL
  }
}
`