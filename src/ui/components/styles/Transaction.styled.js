import styled from 'styled-components'

export const Transaction = styled.div`
  width: 100%;
  color: #fff;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  p{
    margin: 0;
    font-size: 0.75em;
  }

  .icon{
    width: 70px;
    height: 70px;
    background-color: #3E3E3E;
  }

  .content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &:last-child{
        align-items: flex-end;
      }
    }

    .title,
    .amount{
      font-size: 1.2em;
      font-weight: bold;
      opacity: 1;
    }
  }
`
