import React, { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const ethereum = window.ethereum
  const [myAddress, setMyAddress] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ethereum.request({
      method: 'eth_requestAccounts'
    }).then(accounts => {
      setMyAddress(accounts[0])
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return null
  }

  if (myAddress) {
    return <Outlet />
  }

  return <Navigate to='/login' />
}

export default PrivateRoute
