/*eslint-disable*/
import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSidebar } from './styles'

import { logoSVG } from '../../assets'
import { useLocation } from 'react-router-dom';

import { TbArrowsRightLeft } from 'react-icons/tb'
import { RiContactsLine } from 'react-icons/ri';


const Sidebar = () => {
  let location = useLocation();

  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SDivider />
      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}
    </SSidebar>
  )
}


const linksArray = [
  {
    label: "Transactions",
    icon: <TbArrowsRightLeft />,
    to: "/dashboard",
  },
  {
    label: "Contacts",
    icon: <RiContactsLine />,
    to: "/contacts",
  }
];

export default Sidebar