import React from 'react'
import Header from './components/Header'

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'
import Clients from './components/Clients'
import AddClientModal from './components/AddClientModal'

// !WARNING check below implementation to delete client 
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

// @ Set Client vars

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: cache,
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className='container'>
          <AddClientModal/>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App

