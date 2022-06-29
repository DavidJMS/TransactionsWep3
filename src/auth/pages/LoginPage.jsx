import React from 'react'
import { Container } from '../../ui/components/styles/Container.styled'
import { InnerContainer } from '../../ui/components/styles/InnerContainer.styled'
import MetaMaskAuth from '../components/MetaMaskAuth'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()

  const handleConnected = (address) => {
    // TODO: save address to state
    navigate('/dashboard')
  }

  return (
    <Container>
      <InnerContainer>
        <h1>Welcome to the Future!</h1>
        <MetaMaskAuth handleConnected={handleConnected} />
      </InnerContainer>
    </Container>
  )
}
