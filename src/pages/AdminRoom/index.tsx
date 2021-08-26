import { useHistory, useParams } from 'react-router-dom'

import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg'
import { Header } from '../../components/Header';
import { Question } from '../../components/Question';
import { database, auth } from '../../services/firebase';
import { useRoom } from '../../hooks/useRoom';
import '../../styles/room.scss';


type RoomParams={
    id: string
}

export function AdminRoom() {
  
    const history = useHistory()
    const params = useParams<RoomParams>()
    const roomId = params.id

    const {questions, title, authorId} = useRoom(roomId)//carregamento dos dados da sala

    console.log('author id', authorId)
    async function handleEndRoom(){
        database.ref(`rooms/${roomId}`).update({endedAt: new Date()})
        history.push('/')
    }

    async function handleDeleteQuestion(questionId : string){
        if(window.confirm('Tem certeza que deseja excluir essa pergunta?')){
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    async function handleCheckQuestionAsAnswered(questionId : string){
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered:true
        })
    }

    async function handleHighlightQuestion(questionId : string){
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted:true
        })
    }

    async function handleSignOut(){
        await auth.signOut()
        history.push('/')
    }

    return (
        <div id="page-room">
            <Header roomId={roomId} roomAuthorId={authorId} roomTitle={title}/>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length>0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <div className="question-list">
                {
                    questions.map(question =>{
                        return(
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                             >
                                    {
                                        !question.isAnswered && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={()=> handleCheckQuestionAsAnswered(question.id)}
                                                >
                                                    <img src={checkImg} alt="marcar pergunta como respondida" />
                                                </button>   
                                                <button
                                                    type="button"
                                                    onClick={()=> handleHighlightQuestion(question.id)}
                                                >
                                                    <img src={answerImg} alt="dar destaque à pergunta" />
                                                </button>
                                            </>
                                        )
                                    }
                                    <button
                                        type="button"
                                        onClick={()=> handleDeleteQuestion(question.id)}
                                    >
                                        <img src={deleteImg} alt="remover pergunta" />
                                    </button>
                             </Question>
                        )
                    })
                }
                </div>
            </main>
        </div>
    );
}
