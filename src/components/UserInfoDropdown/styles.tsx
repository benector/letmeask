import styled from 'styled-components';
import { Menu} from 'antd';


export const UserInfoContainer = styled.div`
   
    a.ant-dropdown-link {
        display: flex;
        align-items: center;
        column-gap: 5px;
        border: 1px solid #835AFD;
        border-radius: 9999px;
        margin: 5px;
        padding: 5px 10px;

       > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    
       > span {
            margin-top:0;
            margin-left: 8px;
            color: #29292e;
            font-weight: 500;
            font-size: 14px;
            
        }
    
        > svg{
            color: #835AFD;
        }
    }
`

export const MenuStyled = styled(Menu)`
   
`

