/*eslint-disable*/
import React from 'react'
import { DELETE_CONTACT } from '../../querys/contacts'
import { useQuery } from '@apollo/client'


// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

function DeleteContact({ uid }) {

    const { error, loading, data } = useQuery(DELETE_CONTACT, {
        variables: {
            dataApikey: VITE_DATA_API_KEY,
            datasource: VITE_DATA_SOURCE,
            database: VITE_DATABASE,
            collection: VITE_COLLECTION,   
            filter: { _id: { $oid: uid } }  
        } 
    })

    const handleDelete = () => {
        data.deleteContact
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