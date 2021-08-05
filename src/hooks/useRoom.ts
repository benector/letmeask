import { useState, useEffect } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type FirebaseQuestions = Record<string, {
    author: {
        name: string,
        avatar: string
    },
    content:string,
    isAnswered: boolean,
    isHighlighted: boolean,
    likes: Record<string,{
        authorId:string
    }>
}>

type QuestionType = {
    id:string,
    author:{
        name: string,
        avatar: string
    }
    content: string,
    isAnswered:boolean,
    isHighlighted: boolean,
    likeCount: number,
    likeId : string | undefined
}

export function useRoom(roomId: string){

    const { user } = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('')


    //trazer as funcionalidades tanto para a visão publica quanto admin

    useEffect(()=> {

        const roomRef = database.ref(`rooms/${roomId}`)
        //on: toda vez que algo mudar na sala essa função será chamada e atualizará as informações
        roomRef.on('value',room =>{
            const databaseRoom = room.val()
            const firebaseQuestions = databaseRoom.questions as FirebaseQuestions ?? {}
                       
            //Object.entries :transforma json em array com arrays key value
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value ])=>{
                return {
                    id:key,
                    content:value.content,
                    author: value.author,
                    isAnswered: value.isAnswered,
                    isHighlighted: value.isHighlighted,
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
                }
            })
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })

        return () => {
            roomRef.off('value') //desativa os listeners
        }


    }, [roomId, user])//array de dependencias do useEffect, guarda variáveis que vem de de fora
    //sem o segundo argumento (vazio) a função é executada apenas uma vez quando o componente
    //for exibido em tela
 
    return { questions, title}
}