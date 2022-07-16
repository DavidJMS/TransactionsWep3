import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import ContactList from '../components/contacts/ContactList'
import { ContactsPage } from '../pages/ContactsPage'
import TransactionsPage from '../pages/TransactionsPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<TransactionsPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/contacts1' element={<ContactList />} />

        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </>
  )
}
