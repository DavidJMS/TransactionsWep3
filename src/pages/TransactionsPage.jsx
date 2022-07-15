import React, { useState, useEffect } from 'react'
import { Container } from '../ui/components/styles/Container.styled'
import BalanceComponent from '../components/dashboard/BalanceComponent'
import TransactionsComponent from '../components/dashboard/TransactionsComponent'

import detectEthereumProvider from '@metamask/detect-provider'
import blockExplorerList from '../../block_explorer_list'

const BSCSCAN_API_KEY = import.meta.env.VITE_BSCSCAN_API_KEY
const ETHERSCAN_API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY

function isMobileDevice () {
  return 'ontouchstart' in window || 'onmsgesturechange' in window
}
async function connect (onConnected) {
  if (!window.ethereum) {
    window.alert('Get MetaMask!')
    return
  }

  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts'
  })
  onConnected(accounts[0])
}

async function checkIfWalletIsConnected (onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
    })

    if (accounts.length > 0) {
      const account = accounts[0]
      onConnected(account)
      return
    }

    if (isMobileDevice()) {
      await connect(onConnected)
    }
  }
}

const TransactionsPage = () => {
  const [chainId, setChainId] = useState(null)
  const [userAddress, setUserAddress] = useState('')
  const [transactions, setTransactions] = useState([])
  const [accountInfo, setAccountInfo] = useState({})
  const [amountSend, setAmountSend] = useState(0)
  const [reciverAddress, setReciverAddress] = useState('')
  const ethereum = window.ethereum

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress)
  }, [])

  useEffect(() => {
    const init = async () => {
      // this returns the provider, or null if it wasn't detected
      const provider = await detectEthereumProvider()

      if (provider) {
        startApp(provider) // Initialize your app
      } else {
        console.log('Please install MetaMask!')
      }
      const chainId = await ethereum.request({ method: 'eth_chainId' })
      handleChainChanged(chainId)

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
    }

    init()
  }, [])

  function startApp (provider) {
    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?')
    }
    // Access the decentralized web!
  }

  function handleChainChanged (_chainId) {
    if (chainId) {
      // We recommend reloading the page, unless you must do otherwise
      window.location.reload()
    } else {
      console.log('Chain changed to ' + _chainId + ' id: ' + parseInt(_chainId, 16))
      setChainId(parseInt(_chainId, 16))
    }
  }

  // For now, 'eth_accounts' will continue to always return an array
  function handleAccountsChanged (accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask.')
    } else if (accounts[0] !== userAddress) {
      setUserAddress(accounts[0])
      // Do any other work!
    }
  }

  useEffect(() => {
    if (!userAddress || !chainId) return
    const chainInfo = blockExplorerList.filter(e => e.id === chainId)[0]
    if (!chainInfo) throw new Error('Chain not found')
    let apiKey = ''
    switch (chainInfo.symbol) {
      case 'ETH':
        apiKey = ETHERSCAN_API_KEY
        break
      case 'BNB':
        apiKey = BSCSCAN_API_KEY
        break
      default:
        throw new Error('Chain not found')
    }

    fetch(`${chainInfo.explorer}api?module=account&action=balance&address=${userAddress}&apikey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setAccountInfo({
          balance: data.result,
          symbol: chainInfo.symbol
        })
      })
      .catch(err => console.log(err))

    fetch(`${chainInfo.explorer}api?module=account&action=txlist&address=${userAddress}&startblock=0&page=1&offset=50&sort=desc&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const noContractsTransactions = data.result.filter(tx => (tx.input === '0x' && tx.value !== '0'))
        setTransactions(noContractsTransactions.map(tx => {
          return {
            ...tx,
            type: tx.from === userAddress ? 'out' : 'in'
          }
        }))
      })
      .catch(error => console.log(error))
  }, [userAddress, chainId])

  const transformWei = (wei) => {
    const value = wei / 1000000000000000000
    return value.toString().substring(0, 8)
  }

  const sendTransfer = () => {
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: userAddress,
            to: reciverAddress,
            value: parseFloat(amountSend * 1000000000000000000).toString(16) // in wei
          }
        ]
      })
      .then((txHash) => console.log('success ' + txHash))
      .catch((error) => console.log(error))
  }

  const handleAmountSend = (e) => {
    const value = e.target.value
    // regex only numbers
    if (!value.match(/^[0-9]*.[0-9]*$/)) {
      window.alert('invalid amount')
      return
    }
    const weitSending = parseFloat(value) * 1000000000000000000
    const weitBalance = parseFloat(accountInfo.balance)

    if (weitSending > weitBalance) {
      window.alert('You don\'t have enough balance')
      return
    }

    setAmountSend(value)
  }

  return (
    <Container>
      <BalanceComponent balance={transformWei(accountInfo.balance || 0)} symbol={accountInfo.symbol} />
      <input style={{ display: 'block' }} type='text' value={reciverAddress} onChange={(e) => setReciverAddress(e.target.value)} placeholder='wallet recipient' />
      <input style={{ display: 'block' }} value={amountSend} onChange={handleAmountSend} type='text' placeholder='amount' />
      <button onClick={sendTransfer}>Transfer</button>
      <TransactionsComponent transactions={transactions} symbol={accountInfo.symbol} />
    </Container>
  )
}

export default TransactionsPage
