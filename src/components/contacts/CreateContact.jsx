/*eslint-disable*/
import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_CONTACT_MUTATION } from '../../querys/contacts'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE

function CreateContact () {
    const [name, setName] = useState("")
    const [account, setAccount] = useState("")

    const [createContact, { error }] = useMutation(CREATE_CONTACT_MUTATION)


    const addContact = (e) => {
        e.preventDefault()
        try {
            createContact({
                variables: {
                    dataApikey: VITE_DATA_API_KEY,
                    datasource:'Cluster0',
                    database: VITE_DATABASE,
                    collection: VITE_COLLECTION,
                    document: {
                        full_name: name,
                        cryptocurrency_account: account
                    }
                }
            });
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <form onSubmit={addContact}>
            <input 
                type="text" 
                placeholder='Name'
                value={name} 
                onChange={e => setName(e.target.value)}
            />

            <input 
                type="text" 
                placeholder='Account Address'
                value={account} 
                onChange={e => setAccount(e.target.value)}
            />
            <button type='submit'>Add Contact</button>
        </form> 
    )
}

export default CreateContact
