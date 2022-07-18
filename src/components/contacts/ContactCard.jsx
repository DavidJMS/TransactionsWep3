/*eslint-disable*/
import React from 'react'
import { 
    CCard, 
    CCardHeading, 
    CCardText 
} from './styles'

//my imports
import DeleteContact from './DeleteContact'

const ContactCard = (props) => {
    return (
        <>
            <CCard>
                <CCardHeading>
                    {props.name}
                </CCardHeading>
                <CCardText>
                    {props.account}
                </CCardText>
                <DeleteContact key={props.key}  pepe={props.pepe} />
            </CCard>
        </>
    )
}

export default ContactCard