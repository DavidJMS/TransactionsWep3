/*eslint-disable*/
import React from 'react'

// My styles imports
import { Container } from '../ui/components/styles/Container.styled'
import ContactCard from '../components/Contacts/ContactCard'

export const ContactsPage = () => {
    return (
        <>
            <Container>
                <h1>Contacts</h1>
                <ContactCard />
            </Container>
        </>
    )
}
