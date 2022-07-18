import styled from 'styled-components'

export const Modal = styled.div`
  display: block;
  z-index: 50;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 600px;
  background-color: #ccc;
  border-radius: 15px;
  padding: 2em;
  
  .modal-title{
    font-size: 1.75em;
    margin: 0;
    text-align: center;
    margin-bottom: 1em;
  }

  .input-group,
  .input-amount,
  .button-submit {
    display: block;
    width: 100%;
  }

  .input-group {
    margin-bottom: 1em;

    .input-error {
      color: tomato;
    }
  }
  .input-group:last-of-type {
    margin-bottom: 3em;
  }

  .input-amount{
    padding: 1em;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px -5px #000;
    outline: none;
  }

  .button-submit{
    padding: 0.5em;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #3AB600;
    font-size: 1.25em;
    color: #fff;
  }
  .button-submit:disabled{
    background-color: #3E3E3E;
  }
  .button-submit:active{
    transform: scale(0.95);
  }

  .contact{
    display: block;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    padding: 1em;
    cursor: default;

    .select{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .contact-list{
      position: absolute;
      left: 0;
      top: 100%;
      background: #fff;
      width: 100%;
      max-height: 400px;
      overflow: auto;
      display: none;

      &.active{
        display: block;
      }

      .contact-option{
        padding: 1em;

        &:hover{
          background-color: #3E3E3E;
          color: #fff;
        }
      }
    }
  }
`
