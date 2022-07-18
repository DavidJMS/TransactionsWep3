/*eslint-disable*/
import React, { useEffect, useState } from 'react'

// My styles imports
import { Container } from '../ui/components/styles/Container.styled'
import ContactCard from '../components/Contacts/ContactCard'
import GetContacts from '../components/Contacts/GetContacts'
import CreateContact from '../components/Contacts/CreateContact'
import { Button } from '../ui/components/styles/Button.styled'
import ModalContact from '../components/Contacts/ModalContact'
import { CGrid } from '../components/Contacts/styles'

export const ContactsPage = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Container>
                <h1>Contacts</h1>
                <Button
                    onClick={() => setShowModal(!showModal)}
                >
                    Add Contact
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
