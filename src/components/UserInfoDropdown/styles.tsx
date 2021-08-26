import styled, { css } from 'styled-components';
import { Menu} from 'antd';


export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    border: 1px solid #835AFD;
    border-radius: 9999px;
    padding: 5px 10px;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    span {
        margin-left: 8px;
        color: #29292e;
        font-weight: 500;
        font-size: 14px;
    }

    svg{
        color: #835AFD;
    }
`

export const MenuStyled = styled(Menu)`
    div.sign-out{
        align-items: center;
        display: flex;
        justify-content: space-between;
        column-gap: 8px;
        color: #835AFD;
    }
`

