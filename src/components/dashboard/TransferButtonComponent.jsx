import React, { useState, useEffect } from 'react'
import { Box } from '../../ui/components/styles/Box.styled'
import { TransferButton } from '../../ui/components/styles/TransferButton.styled'
import icon from '../../assets/arrow-up.svg'
import ModalTransfer from './ModalTransfer'
import notification from '../../ui/components/notification'

const TransferButtonComponent = ({ balance, symbol }) => {
  const [showModal, setShowModal] = useState(false)
  const ethereum = window.ethereum
  const [myAddress, setMyAddress] = useState('')

  useEffect(() => {
    ethereum.request({
      method: 'eth_requestAccounts'
    }).then(accounts => {
      setMyAddress(accounts[0])
    })
  }, [])

  const sendTransfer = (address, amount) => {
    const weitSending = parseFloat(amount) * 1000000000000000000
    const weitBalance = parseFloat(balance)

    if (weitSending > weitBalance) {
      notification({
        icon: 'error',
        title: 'Error',
        message: 'You don\'t have enough balance'
      })
      return
    }

    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: myAddress,
            to: address,
            value: weitSending.toString(16)
          }
        ]
      })
      .then((txHash) => {
        notification({
          icon: 'success',
          title: 'Success',
          message: 'Transaction sent'
        })
      })
      .catch((error) => {
        notification({
          icon: 'error',
          title: 'Error',
          message: error.message
        })
      })
  }

  return (
    <>
      <Box margin='0 0 2rem'>
        <TransferButton onClick={() => setShowModal(!showModal)}>
          <img src={icon} alt='send transfer' className='icon' />
          Send
        </TransferButton>
      </Box>

      {
        showModal &&
          <ModalTransfer handleSubmit={sendTransfer} onClose={() => setShowModal(false)} symbol={symbol} />
      }
    </>
  )
}

export default TransferButtonComponent
