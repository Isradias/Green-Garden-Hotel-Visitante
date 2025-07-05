import styles from './Corporativo.module.css'
import Video from '../../components/VideoPlayer.js'

function Corporativo (){
    return(
        <div>
            <Video src={'/videos/hotel_corporativo.mp4'} titulo={'CORPORATIVO'}></Video>
            <div className={styles.container}>
                <h1>Ambiente Corporativo</h1>
                <p>
                A Green Garden oferece uma estrutura completa e acolhedora para o aluguel exclusivo de suas 
                acomodações, ideal para empresas que desejam hospedar seus funcionários em um ambiente que une 
                conforto, tranquilidade e contato com a natureza. Com espaços versáteis e serviços personalizados, 
                nossa rede é perfeita para eventos corporativos, treinamentos, workshops ou retiros empresariais. 
                Nossos hotéis, localizados em Albazônia, Eruptinéia e Gazalão, dispõem de salas para reuniões, 
                áreas ao ar livre para dinâmicas em grupo e uma gastronomia que valoriza ingredientes frescos e 
                locais, garantindo uma experiência completa para equipes que buscam descanso e inspiração em meio 
                à autenticidade e sustentabilidade da Green Garden. <br />
                <span>
                Disponibilizamos tarifas diferenciadas, pacotes personalizados e benefícios exclusivos para grupos e 
                reservas corporativas. Para garantir a melhor experiência e um atendimento sob medida, é necessário 
                entrar em contato com nossa equipe antes da reserva. Estamos prontos para entender as necessidades da 
                sua empresa e criar uma proposta ideal para sua estadia ou evento.
                </span>
                
                </p>
                <div className={styles.imgContainer}>
                    <img src="/images/Corporativo/corporativo (1).jpg" alt="corporativo (1)" />
                    <img src="/images/Corporativo/corporativo (2).jpg" alt="corporativo (2)" />
                </div>
            </div>
        </div>
    )
}

export default Corporativo