import styled from 'styled-components';

export const Button = styled.button`
display: inline-block;
font-size: 1em;
margin: 1em;
cursor: pointer;
padding: 0.8em 2em;
border: none;
border-radius: 12px;
display: block;
background-color: ${({bg}) => bg || '#fff'};
background-color: ${({color}) => color || '#fff'};
`;

