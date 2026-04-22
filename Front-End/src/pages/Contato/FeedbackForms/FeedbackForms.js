import styles from './FeedbackForms.module.css'
import Scroll from '../../../components/Scroll';

function FeedbackForms (){
    return(
        <div className={styles.container}>
            <i class="fi fi-rs-check"></i>
            <h1>Mensagem enviada com sucesso!</h1>
            <p>Agradecemos seu contato. Retornaremos em até 24h úteis.</p>
            <Scroll to = {'/'} ><button>Página inicial</button></Scroll>

        </div>
    )
}

export default FeedbackForms