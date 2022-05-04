import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    @media(max-width:1024px){
        flex-direction:column;
        align-items: center;
        margin:0;
        padding:0;
    }

    main {
        flex: 8;

        padding: 0 32px;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;

        @media(max-width:767px){
            height:100vh;
        }
    }

  

    span{
        margin-top: 15px;
    }

    .create-room {
        margin-top: 16px;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        color: #FFF;

        display: flex;
        justify-content: center;
        align-items: center;
        padding:1em;
        cursor: pointer;
        border: 0;

        transition: filter 0.2s;

        img {
            margin-right: 8px;
        }

        &:hover {
            filter: brightness(0.9);
        }
    }

    .separator {
        font-size: 14px;
        color: #a8a8b3;

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-right: 16px;
        }

        &::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-left: 16px;
        }
    }
    button.new-room{
        
    }

`

