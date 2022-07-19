/*eslint-disable*/
import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_CONTACT_MUTATION } from '../../querys/contacts'
import styled from 'styled-components'
import { Input } from '../../ui/components/styles/Input.styled'
import { CButton, CGridItem } from './styles'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

function CreateContact() {
    const wallet = window.myWallet
    const [name, setName] = useState("")
    const [account, setAccount] = useState("")

    const [createContact, { error }] = useMutation(CREATE_CONTACT_MUTATION)


    const addContact = (e) => {
        e.preventDefault()
        try {
            createContact({
                variables: {
                    dataApikey: VITE_DATA_API_KEY,
                    dataSource: VITE_DATA_SOURCE,
                    database: VITE_DATABASE,
                    collection: VITE_COLLECTION,
                    document: {
                        user_wallet: wallet,
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
            <CGridItem>
            <Input
                type="text"
                placeholder='Name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Input
                type="text"
                placeholder='Account Address'
                value={account}
                onChange={e => setAccount(e.target.value)}
            />
                
            <CButton type='submit'>Add</CButton>
            </CGridItem>
            
        </form>
    )
}

export default CreateContact
