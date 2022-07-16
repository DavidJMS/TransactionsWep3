import React, { useState } from 'react'
import { OverlayModal } from '../../ui/components/styles/OverlayModal.styled'
import { Modal } from '../../ui/components/styles/Modal.styled'
import Swal from 'sweetalert2'

const ModalTransfer = ({ onClose, handleSubmit, symbol }) => {
  const [showList, setShowList] = useState(false)
  const [contacts, setContacts] = useState([
    {
      name: 'Pepe Pérez',
      address: '0x1234567890123456gds012345678901234567890'
    },
    {
      name: 'Raul Díaz',
      address: '0x1234567890123456789012345678901234567890'
    },
    {
      name: 'David',
      address: '0x305d35424F098D600CB9ac8E59C6fcBfF8d314bD'
    }
  ])
  const [selectedContact, setSelectedContact] = useState(null)
  const [amountSend, setAmountSend] = useState(0)

  const infoSelectedContact = contacts.find(contact => contact.address === selectedContact)
  const [error, setError] = useState('')

  const handleSelectContact = (address) => {
    setSelectedContact(address)
    setShowList(false)
  }

  const handleAmountSend = (e) => {
    const value = e.target.value
    // regex only numbers
    setError('')

    if (!value.match(/^[0-9]*.[0-9]*$/)) {
      setError('invalid amount')
    } else {
      setError('')
    }

    setAmountSend(value)
  }

  const handleSubmitTransfer = () => {
    if (amountSend <= 0) {
      setError('invalid amount')
      return
    }

    if (!selectedContact) {
      setError('select a contact')
      return
    }

    Swal.fire({
      title: 'Are you sure you want to send this payment?',
      text: `You are about to send ${amountSend} ${symbol} to ${infoSelectedContact.name}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'btn btn-outline btn-success',
        cancelButton: 'btn btn-warning'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit(selectedContact, amountSend)
      }
    })
  }

  return (
    <>
      <Modal>
        <h2 className='modal-title'>Send {symbol}</h2>
        <label>To</label>
        <div className='contact'>
          <div className='select' onClick={() => setShowList(!showList)}>
            <span className='name'>{infoSelectedContact?.name || 'Select contact'}</span>
            <span className='address'>
              {
                infoSelectedContact?.address
                  ? infoSelectedContact?.address.slice(0, 6) + '...' + infoSelectedContact?.address.slice(-6)
                  : ''
              }
            </span>
          </div>
          <div className={`contact-list ${showList ? 'active' : ''}`}>
            {
              contacts.map(contact => (
                <div key={contact.address} onClick={() => handleSelectContact(contact.address)} className='contact-option'>{contact.name}</div>
              ))
            }
          </div>
        </div>

        <label>Amount</label>
        <div className='input-group'>
          <input type='text' className='input-amount' value={amountSend} onChange={handleAmountSend} />
          <small className='input-error'>{error}</small>
        </div>

        <button className='button-submit' disabled={error || !selectedContact} onClick={handleSubmitTransfer}>Send</button>
      </Modal>

      <OverlayModal onClick={onClose} />
    </>
  )
}

export default ModalTransfer
