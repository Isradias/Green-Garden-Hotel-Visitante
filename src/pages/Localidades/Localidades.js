import { useState } from 'react';
import styles from './Localidades.module.css';
import Video from '../../components/VideoPlayer';
import Albazonia from './components/Albazonia.js';
import Eruptineia from './components/Eruptineia.js';
import Gazalao from './components/Gazalao.js';

function Localidades() {
  const [regiao, setRegiao] = useState('Albazônia');

  const handleChange = (event) => {
    setRegiao(event.target.value);
  };

    return (
        <div>
            <Video src='/videos/hotel_localidades.mp4' titulo='LOCALIDADES' />

            <div className={styles.container1}>
                <h2 className={styles.localidadesTitulo}>Escolha seu destino:</h2>
                <select className={styles.select} value={regiao} onChange={handleChange}>
                    <option value="Albazônia">Albazônia</option>
                    <option value="Eruptinéia">Eruptinéia</option>
                    <option value="Gazalão">Gazalão</option>
                </select>
            </div>

            {regiao && (<div className={styles.conteudo}>
            {regiao === "Albazônia" && <Albazonia />}
            {regiao === "Eruptinéia" && <Eruptineia />}
            {regiao === "Gazalão" && <Gazalao />}
        </div>
      )}
    </div>
  );
}

export default Localidades;
