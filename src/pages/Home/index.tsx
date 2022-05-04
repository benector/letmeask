import { FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/useAuth'
import { Banner } from '../../components/Banner'
import { Button } from '../../components/Button'
import { FormContainer } from '../../components/FormContainer'
import { UserInfoDropdown } from '../../components/UserInfoDropdown'
import { HomeContainer } from './styles'

//Assets
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

export function Home(){

    const history = useHistory();//toda função que começa com use chamamos de hook
    const{ user, signInWithGoogle, signOut }= useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleLogin(){
        if(!user){
          await signInWithGoogle()
        }
        history.push('rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        
        event.preventDefault()
        if(roomCode.trim() === ''){
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if(!roomRef.exists()){
            alert('Room does not exist')
            return
        }

        if(roomRef.val().endedAt){
            alert('Room already closed')
            return
        }

        if(roomRef.val().authorId === user?.id)
            history.push(`/admin/rooms/${roomCode}`);
        else
            history.push(`/rooms/${roomCode}`)
    }
    return(
        <HomeContainer>
            <Banner/>
            <main>
               <FormContainer>
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Gerencie e participe<br/> de salas</h2>
                    {user ? (
                        <button className="create-room"style={{background: '#ff85d8'}} onClick={() => history.push('rooms/new')}> Criar uma sala </button>
                    ) : 
                    (
                        <button onClick={handleLogin} className="create-room" style={{background: '#ea4335'}}>
                            <img src={googleIconImg} alt="logo do google" />
                            Entre com uma conta do Google
                        </button>
                    )}
                    <div className="separator">Ou entre como convidado </div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                            onChange={ event => setRoomCode(event.target.value)}
                            value = {roomCode}
                            />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
               </FormContainer>
                {user && <UserInfoDropdown user={user} signOut={signOut}/>}
            </main>
        </HomeContainer>
    )
}