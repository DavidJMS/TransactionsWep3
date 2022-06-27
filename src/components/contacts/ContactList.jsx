import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks"

import { GET_QUERY } from '../../querys/contacts'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

const ContactList = () => {
  const { error, loading, data } = useQuery(GET_QUERY, {
    variables: {
      dataApikey: VITE_DATA_API_KEY,
      datasource: VITE_DATA_SOURCE,
      database: VITE_DATABASE,
      collection: VITE_COLLECTION
    },
  })
  console.log(error, data)
  console.log('Ejecutado')

  return <>

  </>
}

export default ContactList