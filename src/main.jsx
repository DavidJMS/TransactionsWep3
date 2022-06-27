import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Thirty Imports
import { ApolloProvider } from "@apollo/react-hooks"

// Utils
import { client } from "./utils/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
