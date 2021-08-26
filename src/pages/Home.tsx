import { FormEvent, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { database } from '../services/firebase'
import { useAuth } from '../hooks/useAuth'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import{ Button } from '../components/Button'
import { UserInfoDropdown } from '../components/UserInfoDropdown'


import '../styles/auth.scss'


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
        <div id ="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em  tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <span>Gerencie e participe de salas</span>
                    <button onClick={handleLogin} className="create-room">
                        <img src={googleIconImg} alt="logo do google" />
                        Entre com uma conta do Google
                    </button>
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
                </div>
                {user && <UserInfoDropdown user={user} signOut={signOut}/>}

            </main>
        </div>
    )
}