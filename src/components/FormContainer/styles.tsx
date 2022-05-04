import styled from 'styled-components';

export const AuthFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;
    padding: 25px 0;
    

        > img {
            align-self: center;
        }

        h2 {
            font-size: 24px;
            font-weight: 400;
            margin: 24px 0 24px;
            font-family: 'Poppins', sans-serif;
        }

        form {
            input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;
            background: #FFF;
            border: 1px solid #a8a8b3;
            }

            button { 
            margin-top: 16px;
            }

            button, input {
            width: 100%;
            }

`