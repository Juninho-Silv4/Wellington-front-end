import React, { useEffect, useState } from 'react';
import './Cadastro.css'
import { Link } from "react-router-dom";
import api from "../../services/api";

function Cadastro() {
    const [ nomE, setnomE ] = useState('')
    const [ numReg, setNumReg ] = useState('')
    const [ numInv, setNumInv ] = useState('')
    const [ culT, setculT ] = useState('')
    const [ classE, setclassE ] = useState('')
    const [ dimenSAO, setdienSAO ] = useState('')
    const [ descriCAO, setdescriCAO ] = useState('')
    const [ obS, setobS ] = useState('')
    const [ reF, setreF ] = useState('')
    const [ tagS, settagS ] = useState('')

    useEffect(() => {
        api
            .get("/colecao")
            .then((response:any) => console.log(response.data))
            .catch((err:any) => {
                console.error("ops! ocorreu um erro" + err);    
            });
    }, []);

    function handleAddArt () {
        api.post("/colecao", { 
            numero_registro: parseInt(numReg),
            numero_inventario: parseInt(numInv),
            cultura: culT,
            classe_morfologica: classE,
            dimensoes: dimenSAO,
            descricao: descriCAO,
            observacoes: obS,
            referencias: reF,
            tags: tagS
        })
    }

   

    return (
         <div className="cadastro">
             <header>
                 <button className="btn btnmenu">
                    <Link to="/">Voltar</Link>
                 </button>
             </header>
            
            <form id="form">
                
                    <input type="text" name="nome" className="barra_formulario" placeholder='Nome/Identificação' />
                    <input type="number" name="registro" className="barra_formulario" placeholder='Nº de Registro' onChange={(e) => setNumReg(e.target.value)}/>
                    <input type="number" name="inventario" className="barra_formulario" placeholder='Nº de Inventário' onChange={(e) => setNumInv(e.target.value)}/>
                    <input type="text" name="cultura" className="barra_formulario" placeholder='Cultura' onChange={(e) => setculT(e.target.value)}/>
                    <input type="text" name="classe" className="barra_formulario" placeholder='Classe Morfológica' onChange={(e) => setclassE(e.target.value)}/>
                    <input type="text" name="dimensao" className="barra_formulario" placeholder='Dimensões' onChange={(e) => setdienSAO(e.target.value)}/>
                    <input type="text" name="descricao" className="barra_formulario" placeholder='Descrições' onChange={(e) => setdescriCAO(e.target.value)}/>
                    <input type="text" name="observacao" className="barra_formulario" placeholder='Observações' onChange={(e) => setobS(e.target.value)}/>
                    <input type="text" name="referencia" className="barra_formulario" placeholder='Referências' onChange={(e) => setreF(e.target.value)}/>
                    <input type="text" name="caracteristica" className="barra_formulario" placeholder='Características' onChange={(e) => settagS(e.target.value)}/>
                    <input multiple type="file" accept="image/png, image/jpeg" className="btn btnImg" />
            </form>
                    <input type="submit" value="Adicionar Artefato" className="btn btnSubmit" onClick={handleAddArt}/>

        </div> 
        
    ); 
}

export default Cadastro;