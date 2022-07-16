import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }
    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }

    h1 {
        color: white;
    }

    .btn{
        padding: 1.25em 2em;
        outline: none;
        border-radius: 5px !important;
        font-size: 18px !important;
        font-weight: 600;

        &.btn-outline {
            background-color: transparent !important;
            box-shadow: inset 0px 0px 0 2px;
        }

        &.btn-success{
            color: #303F9F;
        }

        &.btn-warning{
            color: #000;
            background-color: #FCE444 !important;
        }
    }

    .swal2-container {
        &.toast-error {
            .swal2-toast {
                color: #722213;
                background: #ffab9c;
            }
        }
        &.toast-success {
            .swal2-toast {
                background: #a4e4a4;
                color: #012501;
            }
        }
    }
`
export default GlobalStyles
