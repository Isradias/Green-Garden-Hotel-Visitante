import styles from './Eruptineia.module.css'

function Eruptineia() {
  return (
    <div className={styles.container}>
      <h1>Eruptineia</h1>

      <div className={styles.container2}>
        <div className='Santuário das Palmeiras Gigantes'>
          <h2>Santuário das Palmeiras Gigantes</h2>
          <h3>(Próximo à Estância Raízes do Campo)</h3>
          <p>
            Este santuário é uma área de preservação com dezenas de palmeiras que ultrapassam os 40 
            metros de altura, formando uma espécie de "catedral vegetal". O silêncio e a luz que penetra 
            entre os troncos criam um ambiente mágico, ideal para caminhadas tranquilas, fotografia de 
            natureza e relaxamento. <br /> 
            Em pontos estratégicos, plataformas de madeira elevadas foram instaladas para proporcionar 
            vistas aéreas da mata. O local também conta com placas de educação ambiental, além de visitas 
            guiadas com biólogos e contadores de histórias locais, que compartilham lendas sobre o surgimento 
            das palmeiras e seus espíritos guardiões.
          </p>
          <div className={styles.imgSantuario}>
            <img src="/images/Localidades/palmeiral (1).jpg" alt="palmeiral (1)" />
            <img src="/images/Localidades/palmeiral (2).jpg" alt="palmeiral (2)" />
            <img src="/images/Localidades/palmeiral (3).jpg" alt="palmeiral (3)" />
          </div>
        </div>
        
        <div className='Museu das Raízes'>
          <h2>Museu das Raízes</h2>
          <h3>(Centro Histórico)</h3>
          <p>
            Instalado em uma antiga fazenda restaurada, o Museu das Raízes preserva a memória de Eruptinéia, 
            desde seus primeiros colonizadores até as tradições rurais atuais. Seu acervo inclui ferramentas 
            antigas, roupas típicas, instrumentos musicais e documentos históricos, além de uma réplica 
            interativa de uma casa de pau-a-pique. <br />
            O museu promove oficinas regulares de artesanato, culinária local e técnicas agrícolas sustentáveis. 
            Em algumas noites, o espaço também sedia saraus culturais com contação de histórias, danças 
            tradicionais e degustação de comidas típicas como bolo de milho verde e chá de ervas do campo.
          </p>
          <div className={styles.imgMuseu}>
            <img src="/images/Localidades/museu (1).jpg" alt="museu (1)" />
            <img src="/images/Localidades/museu (2).jpg" alt="museu (2)" />
            <img src="/images/Localidades/museu (3).jpg" alt="museu (3)" />
          </div>
        </div>

        <div className='Lagoa Encantada'>
          <h2>Lagoa Encantada</h2>
          <h3>(3 km da estância)</h3>
          <p>
            A Lagoa Encantada é conhecida por suas águas de tom azul-esverdeado e pela tranquilidade que 
            oferece aos visitantes. Repleta de vegetação nativa ao redor e com uma pequena ilha no centro, 
            é um dos locais favoritos para famílias e casais. <br />
            Há opções de aluguel de pedalinhos, caiaques e áreas para piqueniques sob a sombra de ipês-amarelos. 
            Em certas épocas do ano, acontece o Festival das Luzes Flutuantes, onde centenas de lanternas 
            biodegradáveis são lançadas na lagoa ao anoitecer, criando um espetáculo mágico.
          </p>
          <div className={styles.imgLagoa}>
            <img src="/images/localidades/lagoa (1).jpg" alt="lagoa (1)" />
            <img src="/images/localidades/lagoa (2).jpg" alt="lagoa (2)" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Eruptineia;
