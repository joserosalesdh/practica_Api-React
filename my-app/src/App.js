import React, {useState, useEffect}from 'react';
import './App.css';
// Utilizo la dependencia de axios para hacer mis HTTP request, hay que tener en cuenta que axios retorna una promesa
import axios from 'axios'
import Header from './components/Header'

const App = () => {
// Dentro de la function creo una const con estado hook, en la que los items van a representar los personajes que viene de la API 
// setItems --> va a ser la function que cambia el estado para manipular este pedaso 
// useState -->Despues pongo un estado por default que va a ser un array vacio
const [items, setItems] = useState([])

// isLoading --> porque quiero saber si la informacion esta siendo cargada o no. Es true por defaulty despues del fetched y se cargado pasa a false
const [isLoading, setIsLoading] = useState(true)

// Como no quiero usar el .then voy a trabajar con async y await
useEffect(() =>{
  const fetchItems = async () => {
    const result = await axios('https://www.breakingbadapi.com/api/characters')
    setItems(result.data)
    //Como la data ya esta cargada pasa de true a false 
    setIsLoading(false)
    //Me quede en el min 15:46 https://www.youtube.com/watch?v=YaioUnMw0mo
  }

  fetchItems()
}, [])


  return (
    <div className="container">

      <Header/>
     
    </div>
  );
}

export default App;