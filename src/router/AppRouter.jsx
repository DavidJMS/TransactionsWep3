import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import TransactionsPage from '../pages/TransactionsPage'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="about" element={<TransactionsPage />} />
            
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}
