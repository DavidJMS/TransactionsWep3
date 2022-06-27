import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

// Environment Vars
const VITE_STEPZEN_API_KEY = import.meta.env.VITE_STEPZEN_API_KEY
const VITE_STEPZEN_ENDPOINT = import.meta.env.VITE_STEPZEN_ENDPOINT

export const client = new ApolloClient({
  headers: {
    Authorization: `Apikey ${VITE_STEPZEN_API_KEY}`,
  },
  uri: VITE_STEPZEN_ENDPOINT,
  cache: new InMemoryCache()
})