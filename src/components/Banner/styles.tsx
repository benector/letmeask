import styled from 'styled-components';

export const BannerStyled = styled.aside`
    flex: 7;

    background: #835afd;
    color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    column-gap: 10px;
    padding: 120px 80px;

    img {
        max-width: 320px;
    }

    strong {
        font: 700 36px 'Poppins', sans-serif;
        line-height: 42px;
        margin-top: 16px;
    }

    p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 16px;
        color: #f8f8f8;
    }

    
    @media(max-width:1024px){
        display:none;
    }
  
}

 
`