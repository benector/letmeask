import { useState, useEffect } from 'react'
import { createContext, ReactNode } from 'react'
import { auth, firebase } from '../services/firebase'
import { User } from '../types'

  
type AuthContextType = {
    user?:User | null;
    signInWithGoogle:  () => Promise<void>;
    signOut:  () => Promise<void>

}
  
type AuthContextProviderProps ={
    children: ReactNode
}  

export const AuthContext = createContext({} as AuthContextType); //formato

export function AuthContextProvider(props: AuthContextProviderProps){
    const [ user, setUser] = useState<User|null>()

    //useEffect é um hook para disparo de efeitos colaterais/funcionalidades
    //disparar uma função sempre que algo acontecer
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
            const { displayName, photoURL, uid } = user
    
            if(!displayName || !photoURL){
            throw new Error ('Missing information from Google Account')
            }
            setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
            })
        }
        })

        //recomendado salvar o event listener em uma variável e depois desligá-lo
        //função para descadastrar dos event listerners
        //pois se o elemento sai de tela o event listener continua rodando
        return () => {
        unsubscribe()
        }
    }, [])
    
    async function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()

        const result = await  auth.signInWithPopup(provider)

        if(result.user){
            const { displayName, photoURL, uid } = result.user

            if(!displayName || !photoURL){
                throw new Error ('Missing information from Google Account')
            }
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }

    async function signOut(){
        console.log('singing out')
        await auth.signOut()
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, signInWithGoogle, signOut}}>
            {props.children}
        </AuthContext.Provider>

    )
}