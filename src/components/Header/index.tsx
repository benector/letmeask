

import { useHistory, Link} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import { database, auth } from '../../services/firebase';
import { RoomCode } from '../RoomCode';
import { Button } from '../Button';
import { UserInfoDropdown } from '../UserInfoDropdown';

import { HeaderContainer } from './styles';
import { AiOutlineArrowLeft } from "react-icons/ai";

import logoImg from '../../assets/images/logo.svg';

type HeaderProps = {
    roomId: string,
    roomAuthorId: string,
    roomTitle:String,
}
export function Header(props : HeaderProps){
    const { user , signOut} = useAuth();
    const history = useHistory();


    async function handleEndRoom(){
        database.ref(`rooms/${props.roomId}`).update({endedAt: new Date()});
        history.push('/');
    }


    return(
        <header>
          <HeaderContainer>
          <img src={logoImg} alt="Letmeask" />
                {/* { props?.roomAuthorId === user?.id &&
                  <div className="my-room">
                    <b>Minha sala</b>

                 </div>

                 } */}
                 <div className="back-link">
                     <AiOutlineArrowLeft />
                     <Link to='/'>Home</Link>
                 </div>
                <RoomCode code={props.roomId} />

               {user &&  
               
               <div>
                   <UserInfoDropdown user={user} signOut={signOut} />
                    { props?.roomAuthorId === user?.id && <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>}

                </div>}
          </HeaderContainer>
        </header>

    )
}