import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core/core.cjs'

const getHeaders = () => {
  if (typeof window !== "undefined") {
    const authToken = localStorage.getItem('token')
    if (authToken) {
      return {
        authorization: `Bearer ${authToken}`
      }
    }
  }
  return {}
}

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:9000/graphql',
    headers: getHeaders()
  }),
  cache: new InMemoryCache(),
})
