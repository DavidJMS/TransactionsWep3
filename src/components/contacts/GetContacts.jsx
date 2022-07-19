/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CONTACT } from '../../querys/contacts'

// my imports
import ContactCard from './ContactCard'
import { CGrid } from './styles'


// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

function GetContacts() {

    const wallet = window.myWallet
    const [reload, setReload] = useState('')

    const { error, loading, data, refetch } = useQuery(GET_CONTACT, {
        variables: {
            dataApikey: VITE_DATA_API_KEY,
            datasource: VITE_DATA_SOURCE,
            database: VITE_DATABASE,
            collection: VITE_COLLECTION,
            filter: {
                "user_wallet": wallet
            }
        },
        refetchIntervalInBackground:true,
        refetchInterval: 5000,
    })
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('ejecutado', reload)
        if (data) {
            setUsers(data.getContacts)
        }
    }, [data, reload])
    console.log(users)
    return (
        <>
            <CGrid>
                {users.length >= 1 && users.map(user => (
                    <ContactCard refetch={refetch} key={user._id} name={user.full_name} account={user.cryptocurrency_account} uid={user._id}/>
                ))}
            </CGrid>
        </>
    )
}

export default GetContacts