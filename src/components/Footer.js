import styles from './Footer.module.css'
import Scroll from './Scroll.js';

function Footer (){
    return(
        <div className={styles.container}>
            <div className={styles.reserveAgora}>
                <Scroll to = {'/reservas'}><button>RESERVE AGORA</button></Scroll>
            </div>
            <h2><img src="images/favicon.png" alt="logo" />GG</h2>
            <h2>MAPA DO SITE</h2>
            <h2>CONTATO</h2>
            <p>Nossa rede nasceu do sonho de unir hospitalidade e natureza em sua forma mais autêntica. Tudo começou com uma antiga fazenda de família, transformada em um refúgio acolhedor para quem buscava paz e conexão com o meio ambiente. Com o tempo, expandimos para outros cantos do Brasil, sempre respeitando a cultura local e preservando o que a natureza tem de mais valioso: sua essência.</p>
            <div className={styles.listaBotoes}>
                <Scroll to = {'/'} ><button>HOTEL</button></Scroll>
                <Scroll to = {'quartos'}><button>QUARTOS</button></Scroll>
                <Scroll to = {'/gastronomia'} ><button>GASTRONOMIA</button></Scroll>
                <Scroll to = {'/atracoes'} ><button>ATRAÇÕES</button></Scroll>
                <Scroll to = {'/localidades'} ><button>LOCALIDADES</button></Scroll>
                <Scroll to = {'/corporativo'} ><button>CORPORATIVO</button></Scroll>
                <Scroll to = {'/ofertas'} ><button>OFERTAS</button></Scroll>
                <Scroll to = {'/contato'} ><button>CONTATO</button></Scroll>
            </div>
            <p> Hotel Floresta Viva – Albazônia <br />
                Rodovia Verdejante, km 12 – Zona de Conservação Natural<br />
                Albazônia, CEP 56789-000<br />
                <br />
                Estância Raízes do Campo – Eruptinéia<br />
                Estrada das Palmeiras, nº 450 – Vale Encantado<br />
                Eruptinéia, CEP 12345-678<br />
                <br />
                Refúgio Serra Alta – Gazalão<br />
                Rua das Águas Claras, nº 88 – Reserva do Horizonte<br />
                Gazalão, CEP 98765-432<br />
                <br />
                WhatsApp para atendimento:<br />
                (99) 91234-5678<br />
                <br />
                Central de Reservas:<br />
                0800 123 4567<br />
                <br />
                E-mail:<br />
                greengardenhotel@ggh.com
            </p>
            <div className={styles.redesSociais}>
                <button><i className="fi fi-brands-instagram"></i></button>
                <button><i className="fi fi-brands-facebook"></i></button>
                <button><i className="fi fi-brands-whatsapp"></i></button>
                <button><i className="fi fi-brands-linkedin"></i></button>
                <button><i className="fi fi-brands-twitter"></i></button>
            </div>

        </div>
    )
}

export default Footer;