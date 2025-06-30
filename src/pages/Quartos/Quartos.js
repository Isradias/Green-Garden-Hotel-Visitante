import VideoPlayer from '../../components/VideoPlayer';
import styles from './Quartos.module.css'

function Quartos (){
    return(
        <div>
            <VideoPlayer src={'/videos/hotel_quartos.mp4'} titulo={'QUARTOS'}/>
            <div className={styles.container1}>
                <h2 className={styles.conheca}>Conheça nossos quartos</h2>
                <div className={styles.container2}>
                    <div className={styles.quarto}>
                        <h1>Suíte Master Jardim</h1>
                        <img src="/images/Quartos/master.jpg" alt="jardim" />
                        <p>
                        A Suíte Master Jardim oferece um ambiente exclusivo e sofisticado,
                        com uma ampla varanda privativa que proporciona uma vista panorâmica.
                        Conta com uma hidromassagem relaxante, decoração elegante com elementos 
                        naturais, cama king-size e todos os confortos modernos para uma estadia tranquila 
                        e revigorante em meio à natureza.
                        </p>
                    </div>
                    <div className={styles.quarto}>
                        <h1>Suíte Família Green</h1>
                        <p>
                        A Suíte Família Green é perfeita para acomodar até quatro pessoas com conforto e 
                        praticidade. Ela dispõe de dois ambientes integrados, oferecendo privacidade e 
                        espaço para todos, além de uma copa equipada com frigobar e um banheiro espaçoso, 
                        ideal para famílias que buscam uma estadia harmoniosa e conectada à natureza.
                        </p>
                        <img src="/images/Quartos/familia.jpg" alt="familia" />
                    </div>
                    <div className={styles.quarto}>
                        <h1>Quarto Conforto Duplo</h1>
                        <img src="/images/Quartos/conforto.jpg" alt="conforto" />
                        <p>
                        O Quarto Conforto Duplo oferece um ambiente acolhedor e funcional, ideal para amigos 
                        ou famílias pequenas. Conta com duas camas de solteiro, iluminação suave que cria uma 
                        atmosfera relaxante, além de um espaço prático e bem equipado para garantir uma estadia 
                        confortável e agradável em meio à tranquilidade da natureza.
                        </p>
                    </div>
                    <div className={styles.quarto}>
                        <h1>Chalé Romântico</h1>
                        <p>
                        O Chalé Romântico oferece um ambiente íntimo e acolhedor, perfeito para momentos especiais 
                        a dois. Com lareira ecológica, cama king-size e isolamento acústico, proporciona conforto, 
                        aconchego e uma atmosfera tranquila, ideal para uma experiência inesquecível em meio à natureza.
                        </p>
                        <img src="/images/Quartos/chale.jpg" alt="chale" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quartos