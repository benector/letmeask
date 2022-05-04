

import {  Link} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Button } from '../Button';
import { UserInfoDropdown } from '../UserInfoDropdown';

import { HeaderContainer } from './styles';
import { AiOutlineArrowLeft } from "react-icons/ai";

import logoImg from '../../assets/images/logo.svg';

type HeaderProps = {
    roomId?: string,
    roomAuthorId?: string,
    roomTitle?:String,
}
export function Header(props : HeaderProps){
    console.log('header render');
    const { user , signOut} = useAuth();
 





    return(
          <HeaderContainer>
            <img src={logoImg} alt="Letmeask" />
                    <div className="back-link">
                        <AiOutlineArrowLeft />
                        <Link to='/'>Home</Link>
                    </div>           
                {user &&  
                
                <div>
                    <UserInfoDropdown user={user} signOut={signOut} />
                    </div>}
          </HeaderContainer>

    )
}