/*eslint-disable*/
import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CONTACT } from '../../querys/contacts'
import { useState } from 'react'
import ContactCard from './ContactCard'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

function GetContacts() {
    
    const { error, loading, data } = useQuery(GET_CONTACT, {
        variables: {
            dataApikey: VITE_DATA_API_KEY,
            datasource: VITE_DATA_SOURCE,
            database: VITE_DATABASE,
            collection: VITE_COLLECTION
        }
    })
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (data) {
            setUsers(data.getContacts)
        }
    }, [data])

    return (
        <div>
            {users.map(user => (
                <ContactCard key={user._id} name={user.full_name} account={user.cryptocurrency_account}/>
            ))}
        </div>
    )
}

export default GetContacts