import React, { useState, useEffect } from 'react'
import { OverlayModal } from '../../ui/components/styles/OverlayModal.styled'
import { Modal } from '../../ui/components/styles/Modal.styled'
import Swal from 'sweetalert2'
import { useQuery } from '@apollo/react-hooks'
import { GET_CONTACT } from '../../querys/contacts'

// Environment Vars
const VITE_DATA_API_KEY = import.meta.env.VITE_DATA_API_KEY
const VITE_COLLECTION = import.meta.env.VITE_COLLECTION
const VITE_DATABASE = import.meta.env.VITE_DATABASE
const VITE_DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE

const ModalTransfer = ({ onClose, handleSubmit, symbol }) => {
  const [showList, setShowList] = useState(false)
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState(null)
  const [amountSend, setAmountSend] = useState(0)
  console.log({ contacts })
  const infoSelectedContact = contacts.find(contact => contact.cryptocurrency_account === selectedContact)
  const [error, setError] = useState('')

  const { error: queryError, loading, data } = useQuery(GET_CONTACT, {
    variables: {
      dataApikey: VITE_DATA_API_KEY,
      datasource: VITE_DATA_SOURCE,
      database: VITE_DATABASE,
      collection: VITE_COLLECTION
    }
  })

  useEffect(() => {
    if (data) {
      setContacts(data.getContacts)
    }
  }, [data])

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
      text: `You are about to send ${amountSend} ${symbol} to ${infoSelectedContact.full_name}`,
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
        <div className='input-group'>
          <div className='contact'>
            <div className='select' onClick={() => setShowList(!showList)}>
              <span className='name'>{infoSelectedContact?.full_name || 'Select contact'}</span>
              <span className='address'>
                {
                  infoSelectedContact?.cryptocurrency_account
                    ? infoSelectedContact?.cryptocurrency_account.slice(0, 6) + '...' + infoSelectedContact?.cryptocurrency_account.slice(-6)
                    : ''
                }
              </span>
            </div>

            <div className={`contact-list ${showList ? 'active' : ''}`}>
              {
                contacts.map(contact => (
                  <div key={contact.cryptocurrency_account} onClick={() => handleSelectContact(contact.cryptocurrency_account)} className='contact-option'>{contact.full_name}</div>
                ))
              }
            </div>
          </div>
          {
            contacts.length === 0 &&
              <small className='input-error'>No data</small>
          }
        </div>

        <label>Amount</label>
        <div className='input-group'>
          <input type='text' className='input-amount' value={amountSend} onChange={handleAmountSend} />
          <small className='input-error'>{error}</small>
        </div>

        <button className='button-submit' disabled={error || !selectedContact || loading || queryError} onClick={handleSubmitTransfer}>Send</button>
      </Modal>

      <OverlayModal onClick={onClose} />
    </>
  )
}

export default ModalTransfer
