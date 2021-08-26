import styled, { css } from 'styled-components';


export const HeaderContainer =  styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

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