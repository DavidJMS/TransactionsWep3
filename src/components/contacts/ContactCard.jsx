/*eslint-disable*/
import React from 'react'
import { CCard, CCardHeading, CCardText } from './styles'

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
            </CCard>
        </>
    )
}

export default ContactCard