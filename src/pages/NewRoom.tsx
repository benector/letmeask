//import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FormEvent,useState } from 'react'
import { database } from '../services/firebase'
import {useAuth} from '../hooks/useAuth'


import{ Button } from '../components/Button'
import { FormContainer } from '../components/FormContainer'
import { Banner } from '../components/Banner'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'

export function NewRoom(){

    const{ user }= useAuth()
    const [newRoom, setNewRoom] = useState('')
    const history = useHistory()

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault()

        if(newRoom.trim() === ''){
            return
        }

        //reference = referência para um registro do banco de dados
        const roomRef = database.ref('rooms')

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return(
        <div id ="page-auth">
            <Banner/>
            <main>
                <div className="main-content">
                    <FormContainer>
                        <img src={logoImg} alt="Letmeask" />
                        <h2>Criar uma nova sala</h2>
                        <form onSubmit={handleCreateRoom}>
                            <input 
                            type="text" 
                            placeholder="Nome da sala" 
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                            <Button type="submit">
                                Criar sala
                            </Button>
                        </form>
                        <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                    </FormContainer>
                </div>
            </main>
        </div>
    )
}