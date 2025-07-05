import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Quartos from './pages/Quartos/Quartos.js'
import Gastronomia from './pages/Gatronomia/Gastronomia.js'
import Atracoes from './pages/Atracoes/Atracoes.js'
import Localidades from './pages/Localidades/Localidades.js'
import Corporativo from "./pages/Corporativo/Corporativo.js"
import Contato from './pages/Contato/Contato.js'
import Sucesso from './pages/Contato/FeedbackForms/FeedbackForms.js'

import Manutencao from './pages/Manutencao/Manutencao.js';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/quartos' element={<Quartos/>} />
        <Route path='/gastronomia' element={<Gastronomia />} />
        <Route path='/atracoes' element={<Atracoes />} />
        <Route path='/localidades' element={<Localidades />} />
        <Route path='/corporativo' element={<Corporativo />} />
        <Route path='/ofertas' element={<Manutencao />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/reservas' element={<Manutencao />} />
        <Route path='/sucesso' element={<Sucesso />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
