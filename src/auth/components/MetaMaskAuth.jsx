import React from 'react'
// import button styled from UI styles
import { Button } from '../../ui/components/styles/Button.styled'

export default function MetaMaskAuth ({ handleConnected }) {
  return <ConnectButton setUserAddress={handleConnected} />
}

const ConnectButton = ({ setUserAddress }) => {
  const isMobileDevice = () => {
    return 'ontouchstart' in window || 'onmsgesturechange' in window
  }

  const connect = async () => {
    if (!window.ethereum) {
      window.alert('Get MetaMask!')
      return
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    setUserAddress(accounts[0])
  }

  if (isMobileDevice()) {
    const dappUrl = '' // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = 'https://metamask.app.link/dapp/' + dappUrl
    return (
      <a href={metamaskAppDeepLink}>
        <Button>
          Connect to MetaMask
        </Button>
      </a>
    )
  }

  return (
    <Button onClick={() => connect()}>
      Sign In with MetaMask
    </Button>
  )
}
