import styles from './Gastronomia.module.css'
import Video from '../../components/VideoPlayer'

function Gastronomia (){
    return(
        <div>
            <Video src= '/videos/hotel_gastronomia.mp4' titulo='GASTRONOMIA'></Video>
            <div className={styles.container}>
                <div className={styles.texto}>
                    <h2>Restaurante Sabor da Terra</h2>
                    <p>
                    Nosso menu é uma celebração dos sabores autênticos da região, 
                    com pratos cuidadosamente preparados que refletem a simplicidade e a riqueza da natureza ao nosso redor. Utilizando ingredientes frescos e locais, oferecemos uma experiência gastronômica única, com opções que vão desde o café da manhã com pães artesanais e frutas da estação, até almoços e jantares com pratos típicos, como peixe grelhado com ervas locais e arroz de feijão tropeiro. Cada refeição é uma homenagem à tradição culinária, com opções para todos os gostos, incluindo pratos vegetarianos, veganos e sobremesas caseiras irresistíveis. Aqui, cada garfada é uma viagem pelos sabores genuínos e sustentáveis da nossa terra.</p>
                </div>
                <img src='/images/Gastronomia/restaurante.jpg' alt='restaurante' />
            </div>

        </div>
    )
}

export default Gastronomia