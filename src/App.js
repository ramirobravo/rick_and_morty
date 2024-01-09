import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import axios from 'axios';

function App() {
   //creando un estado local
   const [characters, setCharacters] = useState([]); // --> [state, changeState] memoria 2

   //SE GUARDAN POR REFERENCIA
   async function onSearch(id){
      //llamda a API
      try {
         const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
         if (response.data.name) {
            setCharacters((oldChars) => [...oldChars, response.data]);
         }
      } catch (error) {
         window.alert('Error logeado');
         console.log(error);
      }
      // await axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      // ({ data }) => {
      //    console.log(data);
      //    if (data.name) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    } else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      
   // );
      //NO LO HAGAN ASI!!!!!
      // characters.push(fakeCharacter); //memoria2
   }

   const onClose = (id) => {
      const filtered = characters.filter(char => char.id !== id );
      setCharacters(filtered);
    }

   return (
      <div className='App'>
         <Navbar onSearch={onSearch} />
         <Cards 
            characters={characters}
            onClose={onClose}
         />
      </div>
   );
}

const myArr= [0] //memoria1

// myArr.push('batman'); //memoria1

const myArr2 = [...myArr, 'batman'] //memori4



export default App;
