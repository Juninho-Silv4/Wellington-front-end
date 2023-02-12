import React from "react"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Components/Home"
import Cadastro from "./Components/Cadastro";
import NSenha from "./Components/NovaSenha";

export default function App(){
    return(
        <Router>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/novasenha" element={<NSenha />} />
                </Routes>
            </div>
        </Router>
    )
}