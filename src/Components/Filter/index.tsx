import React, { useEffect, useState } from 'react';
import './Filter.css';
import Galery from '../Galeria';
import api from '../../services/api'

//const data = Object.entries(artefatos)
//const newdata = data[0][1]


function Filter() {
  const [data, setData] = useState([]);
  
  useEffect(()=> {
    api.get('/colecao')
    .then((response) => {
      const responseData = response.data
      setData(responseData)
    })
    .catch((error) => console.log(error))
  }, [])

  const [ artefacts, setArtefacts ] = useState(data);
  let [ activeFilters, setActiveFilters ] = useState<any>([]);
  const [ elementsToRender, setElementsToRender ] = useState([]);
  const [ filter, setFilter ] = useState('');

  const handleFilter = (e: any) => {
    setFilter(e.target.value)
  };
  
  const filterElements = () => {
    let newElementsArray: any = data;
    
    activeFilters.map((filter: any) => {
        newElementsArray = newElementsArray.filter((element: any) => {
          if(element.tags.includes(filter)){
            return element;
          }  
        })
    })

    setElementsToRender(newElementsArray);
  };

  const handleNewFilter = () => {
    if(filter === '')
      return;

    const newActiveFilters = [...activeFilters, filter]

    setActiveFilters(newActiveFilters);
    setFilter('');
  };

  const handleDeleteFilter = (e: any) => {
    const filterToBeDeleted = e.target.innerText;
    let allArtefacts = activeFilters;
    const filterPosition = activeFilters.indexOf(filterToBeDeleted);

    allArtefacts.splice(filterPosition, 1);
    setActiveFilters(allArtefacts);
    filterElements();
  }

  useEffect(() => {
    filterElements()
  }, [activeFilters])

  return (
    <section className="buscador">
      <div className="area_busca">
        <input type="text" className="barra_de_busca" onChange={handleFilter} value={filter}></input>
        <button className="btn btnBusca" onClick={handleNewFilter}>Aplicar Filtros</button>
      </div>
      <div className="area_filtragem">
        <div className="filtragem">
          <p className="texto texto_principal">Filtros Ativados:</p>
          {
            activeFilters.map((activeFilter: any, index: any) => {
              return(
                <p className="texto texto_caracteristica" key={index} onClick={handleDeleteFilter}>{activeFilter}</p>  
              )
            })
          }
          
        </div>
      </div>
      <div className="area_artefatos">
        <Galery artefatos={elementsToRender}/>
        
      </div>
    </section>
  );
}

export default Filter;