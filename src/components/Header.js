import styles from './Header.module.css'

function Header (){
    return(
        <div className={styles.headerContainer}>
            <div></div>
            <div className={styles.container1}>
                <div className={styles.titulos}>
                    <h1 className={styles.tituloPrincipal}>HOTEL</h1>
                    <h2 className={styles.subtitulo}>GREEN GARDEN</h2>
                </div>
                <img src="/images/favicon.png" alt="logo"/>
            </div>
            <button className={styles.buttonReservas}>RESERVAS</button>
            <hr className={styles.linha} />
            <div className={styles.buttonsNav}>
                <button>HOTEL</button>
                <button>QUARTOS</button>
                <button>GASTRONOMIA</button>
                <button>ATRAÇÕES</button>
                <button>LOCALIDADES</button>
                <button>CORPORATIVO</button>
                <button>OFERTAS</button>
                <button>CONTATO</button>
            </div>
        </div>
    )
}

export default Header