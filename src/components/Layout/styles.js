import styled from "styled-components";

import { v } from "../../ui/components/styles/Variables"; 

export const SLayout = styled.div`
    display: flex;
    
`
export const SMain = styled.main`
    padding: calc(${v.xxlSpacing} * 2);
    overflow-y: auto;   
    flex: 1;
    height: 100vh;
    
`
