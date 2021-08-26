import { ReactNode } from 'react'
import cx from 'classnames'
import avatarImg from '../../assets/images/avatar.png'
import './styles.scss'


type QuestionProps = {
    content:string,
    author:{
        name:string,
        avatar:string
    },
    children?: ReactNode //qualquer conteúdp JSX,
    isAnswered?:boolean,
    isHighlighted?:boolean
}
export function Question({content,author,children, isAnswered = false, isHighlighted = false} : QuestionProps){
    return(
        <div
            className={cx(
                'question',
                {answered : isAnswered},
                {highlighted : isHighlighted && !isAnswered}
            )}
        >
            <p>{ content }</p>
            <footer>
                <div className="user-info">
                    {
                        author ? (
                            <>
                                <img src={author.avatar ? author.avatar : avatarImg} alt={author.name} />
                                <span>{author.name}</span>
                            </>
                        ) : (
                            <span>Anônimo</span>
                        )
                    }
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    )
}