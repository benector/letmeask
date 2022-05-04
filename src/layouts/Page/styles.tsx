import styled from 'styled-components';

export const PageLayoutContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;

    main {
        flex-grow: 1;
        flex-basis: auto;
        max-width: 800px;
        margin: 0 auto;
        padding:10px;
        background:blue;
    }
        
` 