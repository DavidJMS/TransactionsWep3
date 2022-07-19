/*eslint-disable*/
import React, { useState, useEffect } from 'react'

// My styles imports
import { Container } from '../ui/components/styles/Container.styled'
import GetContacts from '../components/Contacts/GetContacts'
import { Button } from '../ui/components/styles/Button.styled'
import ModalContact from '../components/Contacts/ModalContact'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useQuery } from '@apollo/react-hooks'
import { GET_CONTACT } from '../querys/contacts'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE


export const ContactsPage = () => {
    
    const wallet = window.myWallet
    const [showModal, setShowModal] = useState(false)

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
        pollInterval:5000,
        refetchIntervalInBackground:true,
        refetchInterval: 5000,
    })
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (data) {
            setUsers(data.getContacts)
        }
    }, [data])

    return (
        <>
            <Container>
                <h1>Contacts</h1>
                <Button
                    onClick={() => setShowModal(!showModal)}
                >
                    <AiOutlineUserAdd /> Add Contact
                </Button>
                {
                    showModal &&
                    <ModalContact onClose={() => setShowModal(false)} refetch={refetch} />
                }
                <GetContacts users={users} refetch={refetch}/>
            </Container>

        </>
    )
}
