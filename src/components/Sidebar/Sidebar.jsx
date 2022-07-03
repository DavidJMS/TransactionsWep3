/*eslint-disable*/
import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSidebar } from './styles'

import { logoSVG } from '../../assets'
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  let location = useLocation();

  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SDivider />
      <SLinkContainer>
        <SLink to="/dashboard">
          <SLinkLabel>Home</SLinkLabel>
        </SLink>
      </SLinkContainer>
    </SSidebar>
  )
}

export default Sidebar