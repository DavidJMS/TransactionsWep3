import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_CONTACT, CREATE_CONTACT } from '../../querys/contacts'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

const ContactList = () => {
  const { error, loading, data } = useQuery(GET_CONTACT, {
    variables: {
      dataApikey: VITE_DATA_API_KEY,
      datasource: VITE_DATA_SOURCE,
      database: VITE_DATABASE,
      collection: VITE_COLLECTION
    }
  })
  const { loading2, error2, data2 } = useQuery(CREATE_CONTACT, {
    variables: {
      dataApikey: VITE_DATA_API_KEY,
      datasource: VITE_DATA_SOURCE,
      database: VITE_DATABASE,
      collection: VITE_COLLECTION,
      document: {
        cryptocurrency_account: '8546546578',
        full_name: 'Desde web'
      }
    }
  })
  console.log(error, data, loading, 'Ejecutado!')
  console.log(error2, data2, loading2, 'Creado!')

  return (
    <>

    </>
  )
}

export default ContactList
