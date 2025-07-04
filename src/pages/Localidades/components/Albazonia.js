import styles from './Albazonia.module.css'

function Albazonia() {
  return (
    <div className={styles.container}>
      <h1>Albazônia</h1>

      <div className={styles.container2}>
        <div className='Caverna_do_silencio'>
          <h2>Caverna do Silêncio</h2>
          <h3>(15 km do hotel)</h3>
          <p>
            Essa imponente formação geológica milenar recebeu o nome de "Silêncio" devido à incrível 
            acústica interna, que abafa os sons externos quase por completo. Com túneis naturais, salões 
            amplos e estalactites imensas, a Caverna do Silêncio é um destino perfeito para os amantes 
            do ecoturismo e da espeleologia. <br />
            O passeio principal dura cerca de 1 hora e leva os visitantes até o Salão das Estrelas, 
            uma área iluminada por aberturas naturais no teto que permitem a entrada de feixes de luz solar. 
            Ao final do percurso, há um pequeno lago subterrâneo de águas fluorescentes onde é possível fazer 
            meditação guiada com instrutores especializados.
          </p>
          <div className={styles.imgCaverna}>
            <img src="/images/Localidades/cave (1).jpg" alt="cave1" />
            <img src="/images/Localidades/cave (2).jpg" alt="cave2" />
            <img src="/images/Localidades/cave (3).jpg" alt="cave3" />
          </div>
        </div>
        
        <div className='Mirante'>
          <h2>Mirante do Beija-Flor</h2>
          <h3>(Trilha a partir do hotel)</h3>
          <p>
            Este mirante natural está localizado no topo da Colina Encantada e pode ser acessado por uma 
            trilha leve com aproximadamente 1,5 km de extensão. Ao chegar ao topo, os visitantes são 
            presenteados com uma vista panorâmica da floresta e do Rio Verdejante, com neblina suave 
            cobrindo as copas ao amanhecer. <br />
            O local ganhou seu nome pela grande quantidade de beija-flores que se alimentam das flores 
            silvestres próximas. Há bancos de descanso, binóculos de observação e placas interativas com 
            informações sobre aves locais. Muitos turistas relatam avistamentos de espécies raras como o 
            beija-flor-de-topete-azul e o colibri-estrela.
          </p>
          <div className={styles.imgMirante}>
            <img src="/images/Localidades/mirante (1).jpg" alt="mirante (1)" />
            <img src="/images/Localidades/mirante (2).jpg" alt="mirante (2)" />
            <img src="/images/Localidades/mirante (3).jpg" alt="mirante (3)" />
          </div>
        </div>

        <div className='Jardim Botânico de Albazônia'>
          <h2>Jardim Botânico de Albazônia</h2>
          <h3>(Próximo ao Hotel Floresta Viva)</h3>
          <p>
            O Jardim Botânico de Albazônia é um verdadeiro paraíso verde com mais de 600 espécies catalogadas 
            da flora amazônica e tropical. Dividido em setores temáticos como "Medicinais da Selva", "Plantas 
            Carnívoras" e "Orquídeas do Arco Verde", o espaço é ideal para caminhadas contemplativas e 
            aprendizado ambiental. <br />
            As trilhas suspensas permitem que os visitantes caminhem entre as copas das árvores, observando a 
            vida silvestre de um ponto de vista elevado. Há ainda o Borboletário da Esperança, uma estufa viva 
            onde centenas de borboletas nativas voam livremente. Guias locais oferecem passeios educativos sobre 
            fitoterapia indígena, polinização e conservação das espécies. O jardim também abriga um café ecológico 
            com produtos orgânicos da região.
          </p>
          <div className={styles.imgJardim}>
            <img src="/images/localidades/jardim (1).jpg" alt="jardim (1)" />
            <img src="/images/localidades/jardim (2).jpg" alt="jardim (2)" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Albazonia;
