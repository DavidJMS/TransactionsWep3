/*eslint-disable*/
import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkContainerBottom, SLinkIcon, SLinkLabel, SLogo, SSidebar } from './styles'

import { logoSVG } from '../../assets'
import { useLocation } from 'react-router-dom';

import { TbArrowsRightLeft } from 'react-icons/tb'
import { RiContactsLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  let location = useLocation();

  return (
    <SSidebar>
      <div>
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
        <SDivider />
      </div>
      <SLinkContainerBottom>
        <SLink to="/login">
          <SLinkIcon>
            <FiLogOut />
          </SLinkIcon>
          <SLinkLabel>Logout</SLinkLabel>
        </SLink>
      </SLinkContainerBottom>
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