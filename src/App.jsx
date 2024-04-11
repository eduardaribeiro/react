

import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetalhesProduto from "./paginas/detalhesProduto";
import Home from "./paginas/home";






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Home/>}/>
           <Route path="detalhes" element={<DetalhesProduto/>}/>
           <Route path="login" element={<login/>}/>
    
      </Routes>
    </BrowserRouter>
);
}
