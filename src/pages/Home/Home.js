import styles from './Home.module.css'

function Home () {
    return(
        <div className={styles.container}>
            <video autoPlay loop muted className={styles.videoHome}>
            <source src="/videos/hotel_home.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
            </video> {/* Transformar isso aqui em um fragmento para não precisar repetir mais tarde :), usar props que peçam apenas a imagem */}
            <h1 className={styles.bemVindos}>BEM-VINDOS</h1>
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
                <img src='./images/homePromotional.jpg' className={styles.imageHomePromotional}/>
            </div>
        </div>
    )
}

export default Home;