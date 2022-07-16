import styled from 'styled-components'
import img from '../../../assets/arrow-up.svg'

export const TransferButton = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;
  color: #fff;
  text-align: center;
  font-size: 1em;

  .icon{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: block;
    background-color: #3E3E3E;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-bottom: 10px;
  }

  &:hover{
    .icon{
      background-color: #4c4b4b;
    }
  }
`
