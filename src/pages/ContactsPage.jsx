/*eslint-disable*/
import React, { useState } from 'react'

// My styles imports
import { Container } from '../ui/components/styles/Container.styled'
import GetContacts from '../components/Contacts/GetContacts'
import { Button } from '../ui/components/styles/Button.styled'
import ModalContact from '../components/Contacts/ModalContact'
import { AiOutlineUserAdd } from 'react-icons/ai'


export const ContactsPage = () => {
    const [showModal, setShowModal] = useState(false)


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
                    <ModalContact onClose={() => setShowModal(false)} />
                }
                <GetContacts />
            </Container>

        </>
    )
}
