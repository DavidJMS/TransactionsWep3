/*eslint-disable*/
import styled from "styled-components";

import { v } from "../../ui/components/styles/Variables";


export const CCard = styled.div`
    background: #fff;
    border-radius: ${v.borderRadius};
    box-shadow: 0 0 0 1px #e0e0e0;
    padding: ${v.lgSpacing};
    margin: ${v.lgSpacing} 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CCardHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: ${v.smSpacing} 0;
    font-size: ${v.fontSizeHeading};
    font-weight: 600;
    color: ${v.textColor};
`;

export const CCardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: ${v.smSpacing} 0;
    font-size: ${v.fontSizeText};
    font-weight: ${v.fontWeight};
    color: ${v.textColor};
`;

export const CGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${v.xlSpacing};
    width: 100%;
    margin: ${v.smSpacing} 0;
`;

export const CButton = styled.button`
 /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    margin: ${v.smSpacing} 0;
    padding: 1em 1em;
    width: 50%;
    border: 2px solid palevioletred;
    border-radius: 3px;

    &:hover {
        background: ${props => props.primary ? "white" : "palevioletred"};
        color: ${props => props.primary ? "palevioletred" : "white"};
    }
`;

export const CGridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: ${v.smSpacing} 0;
    font-size: ${v.fontSizeText};
    font-weight: ${v.fontWeight};
    color: ${v.textColor};
`;

