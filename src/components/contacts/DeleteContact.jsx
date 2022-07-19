/*eslint-disable*/
import React from 'react'
import { DELETE_CONTACT_MUTATION } from '../../querys/contacts'
import { useMutation } from '@apollo/client'
import { CButton } from './styles'


// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

function DeleteContact({ uid, refetch }) {

    const [deleteContact, { data, loading, error }] = useMutation(DELETE_CONTACT_MUTATION)
    const handleDelete = () => {
        deleteContact({
            variables: {
                dataApikey: VITE_DATA_API_KEY,
                dataSource: VITE_DATA_SOURCE,
                database: VITE_DATABASE,
                collection: VITE_COLLECTION,   
                filter: { _id: { $oid: uid } }  
            }
        })
        if(!error){
            refetch()
        }
    }

    return (
        <>
            <CButton onClick={handleDelete}>
                Delete Contact
            </CButton>
        </>
    )
}

export default DeleteContact