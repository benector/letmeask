
import { BannerStyled } from "./styles"
import illustrationImg from '../../assets/images/illustration.svg'


export function Banner(){
    console.log('banner render')
    return(
        <BannerStyled>
            <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
            <div>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em  tempo-real</p>
            </div>
        </ BannerStyled>
    )
}