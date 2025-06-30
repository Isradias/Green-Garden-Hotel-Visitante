import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Quartos from "./pages/Quartos/Quartos.js";

import Manutencao from "./pages/Manutencao/Manutencao.js";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/quartos' element={<Quartos/>} />
        <Route path='/gastronomia' element={<Manutencao />} />
        <Route path='/atracoes' element={<Manutencao />} />
        <Route path='/localidades' element={<Manutencao />} />
        <Route path='/corporativo' element={<Manutencao />} />
        <Route path='/ofertas' element={<Manutencao />} />
        <Route path='/contato' element={<Manutencao />} />
        <Route path='/reservas' element={<Manutencao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
