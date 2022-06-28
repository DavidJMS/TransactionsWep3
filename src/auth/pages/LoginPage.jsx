import React from 'react'
import { Container } from '../../ui/components/styles/Container.styled'
import { InnerContainer } from '../../ui/components/styles/InnerContainer.styled'
import MetaMaskAuth from '../components/MetaMaskAuth'

export const LoginPage = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <h1>Welcome to the Future!</h1>
          <MetaMaskAuth />
        </InnerContainer>
      </Container>
    </>
  )
}
