/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { BrowserRouter as Router } from "react-router-dom";

// Thirty Imports
import { ApolloProvider } from "@apollo/react-hooks"

// Utils
import { client } from "./utils/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
)