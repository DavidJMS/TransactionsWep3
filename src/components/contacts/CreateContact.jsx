/*eslint-disable*/
import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CREATE_CONTACT } from '../../querys/contacts'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

function CreateContact () {
    const [name, setName] = useState("")
    const [account, setAccount] = useState("")



    const addContact = (e) => {
        e.preventDefault()
        const { data } = useQuery(CREATE_CONTACT, {
            dataApikey: VITE_DATA_API_KEY,
            datasource: VITE_DATA_SOURCE,
            database: VITE_DATABASE,
            collection: VITE_COLLECTION,
            document: {
                cryptocurrency_account: account,
                full_name: name
            }
        })
        console.log(data)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || account === "") {
            alert("Please fill all fields")
        }
        else {
            data.createContact 
            .then(res => {
                console.log(res)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
            
        }

    }

    return (
        <form onSubmit={handleSubmit}>
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
