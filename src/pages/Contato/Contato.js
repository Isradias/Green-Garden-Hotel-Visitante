import styles from './Contato.module.css'
import Scroll from '../../components/Scroll';

function Contato () {
    return (
        <div className={styles.container1}>
            <h1 className={styles.entre}>Entre em contato conosco...</h1>
            <div className={styles.containerInfo}>
                <i className="fi fi-rs-marker"></i>
                <div className={styles.info}>
                    <p>
                    Hotel Floresta Viva – Albazônia <br />
                    Rodovia Verdejante, km 12 – Zona de Conservação Natural <br />
                    Albazônia, CEP 56789-000
                    </p>
                </div>
                <i className="fi fi-rs-marker"></i>
                <div className={styles.info}>
                    <p>
                    Estância Raízes do Campo – Eruptinéia <br />
                    Estrada das Palmeiras, nº 450 – Vale Encantado <br />
                    Eruptinéia, CEP 12345-678
                    </p>
                </div>
                <i className="fi fi-rs-marker"></i>
                <div className={styles.info}>
                    <p>
                    Refúgio Serra Alta – Gazalão <br />
                    Rua das Águas Claras, nº 88 – Reserva do Horizonte <br />
                    Gazalão, CEP 98765-432
                    </p>
                </div>
                <i className="fi fi-brands-whatsapp"></i>
                <div className={styles.info}>
                    <p>
                    WhatsApp para atendimento: <br />
                    (99) 91234-5678
                    </p>
                </div>
                <i className="fi fi-rr-phone-call"></i>
                <div className={styles.info}>
                    <p>
                    Central de Reservas: <br />
                    0800 123 4567
                    </p>
                </div>
                <i className="fi fi-rr-envelope"></i>
                <div className={styles.info}>
                    <p>
                    E-mail: <br />
                    greengardenhotel@ggh.com
                    </p>
                </div>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" className={styles.forms}>
                <input type="hidden" name="access_key" value="ae73f5de-5de5-4a3c-a9d3-a9d534051a9c" />
                
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required placeholder="Digite seu nome" />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="Digite seu e-mail" />

                <label htmlFor="celular">Celular</label>
                <input type="celular" id="celular" name="celular" required placeholder="Digite o número do seu celular" />

                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required placeholder="Sua mensagem"></textarea>

                <div className="h-captcha" data-captcha="true"></div>

                <input type="hidden" name="redirect" value="http://localhost:3000/sucesso" />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contato