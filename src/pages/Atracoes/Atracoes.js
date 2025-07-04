import styles from './Atracoes.module.css'
import Video from '../../components/VideoPlayer'

function Atracoes () {
    return (
        <div>
            <Video src= '/videos/hotel_atracoes.mp4' titulo= 'ATRAÇÕES'></Video>
            <div className={styles.container}>
                <div className={styles.texto}>
                    <h2>Atrações Green Garden</h2>
                    <p>
                    No entorno da Green Garden, os hóspedes encontram uma variedade de atrações 
                    para todos os gostos. Para os amantes da natureza, a Trilha das Bromélias 
                    oferece uma caminhada leve em meio à vegetação nativa, com mirantes que 
                    revelam paisagens deslumbrantes ao pôr do sol. Já o Lago das Pedras é ideal 
                    para piqueniques e passeios de pedalinho, proporcionando momentos de lazer em 
                    família. Quem busca cultura e história pode visitar o Centro Cultural Vila 
                    Antiga, que recria a arquitetura e os costumes de épocas passadas com exposições 
                    e apresentações ao vivo. E para os que não dispensam um toque de aventura, o 
                    Parque da Serra oferece tirolesa, arvorismo e escalada, com total segurança e 
                    monitores especializados. Todas essas opções estão a poucos minutos da Green Garden, 
                    facilitando o acesso e tornando sua estadia ainda mais completa e memorável.
                    </p>
                </div>
                <div className={styles.containerImages}>
                    <img src='/images/Atracoes/atracao3.jpg' alt='' />
                    <img src='/images/Atracoes/atracao2.jpg' alt='' />
                    <img src='/images/Atracoes/atracao1.jpg' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Atracoes