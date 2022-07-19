import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import { ContactsPage } from '../pages/ContactsPage'
import TransactionsPage from '../pages/TransactionsPage'
import PrivateRoute from './PrivateRoute'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<TransactionsPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Route>

      <Route path='/' element={<Navigate to='/login' />} />
    </Routes>
  )
}
