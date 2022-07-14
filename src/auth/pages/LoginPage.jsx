/*eslint-disable*/
import React from 'react'
import { Container } from '../../ui/components/styles/Container.styled'
import { InnerContainer } from '../../ui/components/styles/InnerContainer.styled'
import MetaMaskAuth from '../components/MetaMaskAuth'
import { NavLink, useNavigate } from 'react-router-dom'
import { HeadingText } from '../../ui/components/styles/Text.styled'

export const LoginPage = () => {
  const navigate = useNavigate()

  const handleConnected = (address) => {
    // TODO: save address to state
    navigate('/dashboard')
  }

  return (
    <Container>
      <InnerContainer>
        <HeadingText
        color='#dcb90a'
        >🚀 Welcome to the Future 🚀</HeadingText>
        <MetaMaskAuth handleConnected={handleConnected} />
        <NavLink
          to='/dashboard'
          style={{
            fontSize: '1rem',
            textDecoration: 'none',
            color: '#c6c6c6',
            marginTop: '0.8rem'            
          }}
        >
          Continue without login
        </NavLink>
      </InnerContainer>
    </Container>
  )
}
