/*eslint-disable*/
import React from 'react'
import { 
    CCard, 
    CCardHeading, 
    CCardText 
} from './styles'

//my imports
import DeleteContact from './DeleteContact'

const ContactCard = ({uid, refetch, name, account}) => {
    return (
        <>
            <CCard>
                <CCardHeading>
                    {name}
                </CCardHeading>
                <CCardText>
                    {account}
                </CCardText>
                <DeleteContact uid={uid} refetch={refetch}/>
            </CCard>
        </>
    )
}

export default ContactCard