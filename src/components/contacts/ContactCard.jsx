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
                <DeleteContact uid={props.uid} setReload={props.setReload}/>
            </CCard>
        </>
    )
}

export default ContactCard