import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { GET_CONTACT, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, CREATE_CONTACT_MUTATION, UPDATE_CONTACT_MUTATION, DELETE_CONTACT_MUTATION } from '../../querys/contacts'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

const ContactList = () => {
  // const { error, loading, data } = useQuery(GET_CONTACT, {
  //   variables: {
  //     dataApikey: VITE_DATA_API_KEY,
  //     datasource: VITE_DATA_SOURCE,
  //     database: VITE_DATABASE,
  //     collection: VITE_COLLECTION
  //   }
  // })

  // const { loading2, error2, data2 } = useQuery(CREATE_CONTACT, {
  //   variables: {
  //     dataApikey: VITE_DATA_API_KEY,
  //     datasource: VITE_DATA_SOURCE,
  //     database: VITE_DATABASE,
  //     collection: VITE_COLLECTION,
  //     document: {
  //       cryptocurrency_account: '8546546578',
  //       full_name: 'Desde web'
  //     }
  //   }
  // })
  // const { loading3, error3, data3 } = useQuery(UPDATE_CONTACT, {
  //   variables: {
  //     dataApikey: VITE_DATA_API_KEY,
  //     datasource: VITE_DATA_SOURCE,
  //     database: VITE_DATABASE,
  //     collection: VITE_COLLECTION,
  //     filter: { _id: { $oid: '62d1dca35887dc83b957dcd8' } },
  //     update: {
  //       $set: {
  //         cryptocurrency_account: '8546546578',
  //         full_name: 'Editado Desde stepzen'

  //       }
  //     }
  //   }
  // })
  // const { loading4, error4, data4 } = useQuery(DELETE_CONTACT, {
  //   variables: {
  //     dataApikey: VITE_DATA_API_KEY,
  //     datasource: VITE_DATA_SOURCE,
  //     database: VITE_DATABASE,
  //     collection: VITE_COLLECTION,
  //     filter: { _id: { $oid: '62d1dca35887dc83b957dcd8' } }
  //   }
  // })

  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_CONTACT_MUTATION)
  const [mutateFunction2, { data2, loading2, error2 }] = useMutation(UPDATE_CONTACT_MUTATION)
  const [mutateFunction3, { data3, loading3, error3 }] = useMutation(DELETE_CONTACT_MUTATION)

  // console.log(error, data, loading, 'Ejecutado!')
  console.log(error, data, loading, 'Creado!')
  // console.log(error3, data3, loading3, 'Editado!')
  // console.log(loading4, error4, data4, 'Eliminado!')

  mutateFunction2({
    variables: {
      dataApikey: VITE_DATA_API_KEY,
      datasource: VITE_DATA_SOURCE,
      database: VITE_DATABASE,
      collection: VITE_COLLECTION,
      filter: { _id: { $oid: '62d1dca35887dc83b957dcd8' } },
      update: {
        $set: {
          cryptocurrency_account: '8546546578',
          full_name: 'Editado Desde stepzen'

        }
      }
    }
  }
  )
  mutateFunction3(
    {
      variables: {
        dataApikey: VITE_DATA_API_KEY,
        datasource: VITE_DATA_SOURCE,
        database: VITE_DATABASE,
        collection: VITE_COLLECTION,
        filter: { _id: { $oid: '62d1dca35887dc83b957dcd8' } }
      }
    }
  )

  return (
    <>
      <button onClick={() => {
        mutateFunction({
          variables: {
            dataApikey: VITE_DATA_API_KEY,
            dataSource: 'Cluster0',
            collection: VITE_COLLECTION,
            database: VITE_DATABASE,
            document: {
              cryptocurrency_account: 'mutacion',
              full_name: 'Desde web'
            }
          }
        })
        console.log(error, data, loading, 'Creado!')
      }}
      >Crear uno nuevo
      </button>
    </>
  )
}

export default ContactList
