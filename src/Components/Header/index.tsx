import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <header>
        
        <button className="btn btnmenu">
          <Link to="/cadastro">Adicionar Artefato</Link>
        </button>
      
      
        <button className="btn btnmenu">
          <Link to="/novasenha">Trocar Senha Atual</Link>
        </button>
      
      
        <button className="btn btnmenu">
          <Link to="/">Sair do Aplicativo</Link>
        </button>
          
      </header>
    </div>
  );
}

export default Header;