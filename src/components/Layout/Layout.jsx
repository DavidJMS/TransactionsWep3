/*eslint-disable*/
import React from 'react'
import { useLocation } from 'react-router-dom';

//my imports
import Sidebar from '../Sidebar/Sidebar'
import { SLayout, SMain } from './styles'

const Layout = ({ children }) => {
  const location = useLocation();

  return (

    location.pathname !== '/login' ? (
      <SLayout>
        <Sidebar />
        <SMain>
          {children}
        </SMain>
      </SLayout>
    ) : (
      children
    )
  )
}

export default Layout