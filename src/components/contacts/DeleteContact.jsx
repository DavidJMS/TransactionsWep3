/*eslint-disable*/
import React from 'react'
import { DELETE_CONTACT_MUTATION } from '../../querys/contacts'
import { useMutation } from '@apollo/client'


// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

function DeleteContact({ uid }) {

    const [deleteContact, { data3, loading3, error3 }] = useMutation(DELETE_CONTACT_MUTATION)

    const { error, loading, data } = useMutation(DELETE_CONTACT, {
        variables: {
            dataApikey: VITE_DATA_API_KEY,
            datasource: VITE_DATA_SOURCE,
            database: VITE_DATABASE,
            collection: VITE_COLLECTION,   
            filter: { _id: { $oid: uid } }  
        } 
    })
    const handleDelete = () => {
        deleteContact({
            variables: {
                dataApikey: VITE_DATA_API_KEY,
                datasource: VITE_DATA_SOURCE,
                database: VITE_DATABASE,
                collection: VITE_COLLECTION,   
                filter: { _id: { $oid: uid } }  
            }
        })
    }

    return (
        <>
            <button onClick={handleDelete}>
                Delete Contact
            </button>
        </>
    )
}

export default DeleteContact