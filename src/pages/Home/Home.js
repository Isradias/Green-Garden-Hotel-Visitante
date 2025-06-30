import styles from './Home.module.css'
import Video from '../../components/VideoPlayer.js'
function Home () {
    return(
        <div>
            <div className={styles.container}>
                <Video src='/videos/hotel_home.mp4' titulo='BEM-VINDOS'/>
                <div className={styles.conteudoHome}>
                    <div className={styles.texto}>
                        <h2>Viva a essência da natureza com todo o conforto que você merece...</h2>
                        <p> 
                            Conecte-se com a natureza de forma única em nossa rede de hotéis.
                            Localizados em cenários deslumbrantes como florestas nativas, 
                            fazendas históricas e áreas de preservação ambiental, 
                            nossos hotéis oferecem experiências imersivas para quem busca descanso, 
                            autenticidade e bem-estar. Cada detalhe é pensado para proporcionar conforto com simplicidade, 
                            promovendo momentos inesquecíveis em meio à natureza.
                        </p>
                    </div>
                    <img src='/images/homePromotional.jpg' className={styles.imageHomePromotional}/>
                </div>
            </div>
        </div>
    )
}

export default Home;