import styled from 'styled-components';

export const HeaderContainer =  styled.header`
    flex-grow: 0;
    flex-basis: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    padding: 0.7em;

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
      }
    }

    div.back-link{
        display:flex;
        align-items:center;
        text-decoration:underline;
    }
    
  }`;