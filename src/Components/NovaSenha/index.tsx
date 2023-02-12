import React, { useEffect, useState } from 'react';
import './NSenha.css'
import { Link } from "react-router-dom";
import api from "../../services/api";

function NSenha() {
    
    return (
         <div className="cadastro">
             <header>
                 <button className="btn btnmenu">
                    <Link to="/">Voltar</Link>
                 </button>
             </header>
            
            <form id="form">
                
                    <input type="text" name="nome" className="barra_formulario" placeholder='Nova Senha' />
                    <input type="text" name="registro" className="barra_formulario" placeholder='Repetir Nova Senha' />
                    
                    <input type="submit" value="Mudar Senha" className="btn btnCaracteristica"/>
            </form>
        </div> 
        
    ); 
}

export default NSenha;