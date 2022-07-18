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
    font-weight: ${v.fontWeight};
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



