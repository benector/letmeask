

import { useHistory } from 'react-router-dom';
import { User } from '../../types';
import { Dropdown } from 'antd';
import { UserInfoContainer, MenuStyled } from './styles';
import { AiFillCaretDown, AiOutlineLogout } from "react-icons/ai";

type UserInfoDropdownProps = {
    user?:User |null;
    signOut: () => Promise<void>

}

export function UserInfoDropdown(props: UserInfoDropdownProps){

    const history = useHistory();

    async function handleSignOut(e:any){
        e.preventDefault();
        console.log('singing out')
        await props.signOut();
        history.push('/');
    }
    
    const menu = (
        <MenuStyled>
          <MenuStyled.Item key="0">
            <div className="sign-out">
                <a href="#" onClick={handleSignOut}><AiOutlineLogout /> Sair</a>
            </div>
          </MenuStyled.Item>
          <MenuStyled.Item key="1">
            <div className="sign-out">
                <a href="/admin/my-rooms">Minhas salas</a>
            </div>
          </MenuStyled.Item>
        </MenuStyled>
      );

    return(
      <UserInfoContainer>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                <a className="ant-dropdown-link" href="#" onClick={e => e.preventDefault()}>
                    <img src={props.user?.avatar} alt={`usuário logado: ${props.user?.name}`} />
                    <span>{props.user?.name}</span>
                    < AiFillCaretDown />
                </a>
            </Dropdown>
            {/* <button className="sign-out" onClick={handleSignOut}></button> */}

      </UserInfoContainer>
    )
}