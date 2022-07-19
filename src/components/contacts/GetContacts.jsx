/*eslint-disable*/
import React, { useEffect, useState } from 'react'

// my imports
import ContactCard from './ContactCard'
import { CGrid } from './styles'


function GetContacts({users, refetch}) {
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