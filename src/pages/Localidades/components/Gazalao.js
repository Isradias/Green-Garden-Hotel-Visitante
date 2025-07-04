import styles from './Gazalao.module.css'

function Gazalao() {
  return (
    <div className={styles.container}>
      <h1>Gazalão</h1>

      <div className={styles.container2}>
        <div className='Vale das Pedras Azuis'>
          <h2>Vale das Pedras Azuis</h2>
          <h3>(5 km do Refúgio Serra Alta)</h3>
          <p>
            Esse vale montanhoso é repleto de rochas de coloração azulada, resultado de minerais únicos da região. 
            Ao nascer e pôr do sol, as pedras refletem tons metálicos que encantam os visitantes. Trilhas bem 
            sinalizadas levam a mirantes naturais, cavernas e pequenas quedas d’água escondidas. <br />
            O local também é muito procurado para esportes de aventura como escalada e rapel, com rotas para iniciantes 
            e praticantes experientes. Para os mais contemplativos, há áreas tranquilas para leitura, pintura ao ar 
            livre e observação de borboletas e libélulas.
          </p>
          <div className={styles.imgVale}>
            <img src="/images/Localidades/vale (1).png" alt="vale1" />
            <img src="/images/Localidades/vale (2).png" alt="vale2" />
            <img src="/images/Localidades/vale (3).png" alt="vale3" />
          </div>
        </div>
        
        <div className='Fonte dos Desejos Eternos'>
          <h2>Fonte dos Desejos Eternos</h2>
          <h3>(Reserva do Horizonte)</h3>
          <p>
            A Fonte dos Desejos Eternos é uma nascente cristalina cercada por pedras lisas e vegetação densa, 
            com uma leve névoa que paira constantemente sobre a água. Diz a lenda local que quem joga uma flor 
            na fonte e faz um desejo puro de coração verá sua realização em breve. <br />
            O local é mantido por moradores da cidade e abriga um pequeno santuário natural com bancos de madeira 
            entalhada e um altar de pedras empilhadas. Muitos casais visitam a fonte para promessas de amor, 
            enquanto peregrinos deixam mensagens e objetos simbólicos nas margens da nascente.
          </p>
          <div className={styles.imgFonte}>
            <img src="/images/Localidades/fonte (1).jpg" alt="fonte (1)" />
            <img src="/images/Localidades/fonte (2).jpg" alt="fonte (2)" />
            <img src="/images/Localidades/fonte (3).jpg" alt="fonte (3)" />
          </div>
        </div>

        <div className='Relógio Solar de Gazalão'>
          <h2>Relógio Solar de Gazalão</h2>
          <h3>(Próximo ao Hotel Floresta Viva)</h3>
          <p>
            Construído artesanalmente com pedras retiradas da própria serra, o Relógio Solar de Gazalão é uma 
            obra de engenharia ancestral. Ele marca com precisão as horas do dia usando apenas a sombra projetada 
            pelo sol, e é também um símbolo da harmonia entre tempo e natureza. <br />
            A praça ao redor é um ponto de encontro com bancos floridos, músicos de rua e feiras de produtos 
            regionais. Guias locais contam a história do relógio e realizam demonstrações educativas para 
            crianças e turistas curiosos sobre astronomia e ecologia.
          </p>
          <div className={styles.imgRelogio}>
            <img src="/images/localidades/relogio (1).jpg" alt="relogio (1)" />
            <img src="/images/localidades/relogio (2).jpg" alt="relogio (2)" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Gazalao;
