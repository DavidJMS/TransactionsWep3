/*eslint-disable*/
import { Link } from "react-router-dom";
import styled  from "styled-components";

import { v } from "../../ui/components/styles/Variables";

export const SSidebar = styled.div`
    width: ${v.sidebarWidth};
    background: #3E3E3E;
    height: 100vH;
    padding: ${v.lgSpacing};

    position: relative;
`;

export const SLogo = styled.div`
    width: 25vh;

    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.lgSpacing};
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: gray;
    margin: ${v.lgSpacing} 0;
`

export const SLinkContainer = styled.div`
    background: transparent;
    border-radius: ${v.borderRadius};
    margin: 8px 0;

    :hover {
        box-shadow: inset 0 0 0 1px #e0e0e0;
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
    padding: ${v.lgSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;


