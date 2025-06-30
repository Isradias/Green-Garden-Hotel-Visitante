import styles from './Header.module.css'
import Link from './Scroll.js';
// import { Link } from 'react-router-dom';

function Header (){
    return(
        <div className={styles.headerContainer}>
            <div className={styles.container1}>
                <div className={styles.titulos}>
                    <h1 className={styles.tituloPrincipal}>HOTEL</h1>
                    <h2 className={styles.subtitulo}>GREEN GARDEN</h2>
                </div>
                <img src="/images/favicon.png" alt="logo"/>
            </div>
            <Link to = {'/reservas'}><button className={styles.buttonReservas}>RESERVAS</button></Link>
            <hr className={styles.linha} />
            <div className={styles.buttonsNav}>
                <Link to = {'/'}><button>HOTEL</button></Link>
                <Link to = {'/quartos'}><button>QUARTOS</button></Link>
                <Link to = {'/gastronomia'}><button>GASTRONOMIA</button></Link>
                <Link to = {'/atracoes'}><button>ATRAÇÕES</button></Link>
                <Link to = {'/localidades'}><button>LOCALIDADES</button></Link>
                <Link to = {'/corporativo'}><button>CORPORATIVO</button></Link>
                <Link to = {'/ofertas'}><button>OFERTAS</button></Link>
                <Link to = {'/contato'}><button>CONTATO</button></Link>
            </div>
        </div>
    )
}

export default Header