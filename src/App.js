import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';


function App() {

   const [ characters, setCharacters] = useState([]);

   //character = [] //memoria1

   const onClose = (id) => {
      //crea un nuevo arreglo sin el personaje
      const filteredSate = characters.filter((char)=> char.id !== id);
      setCharacters(filteredSate);
   };

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         (reponse) => {
            if (reponse.data.name) {
               setCharacters((oldChars) => [...oldChars, reponse.data]);
            } else {
               window.alert(`¡No hay personajes con ID: ${id}!`);
            }
         }
      );
   };

   //character = [characterSearched ] //memoria2
   

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>

            {/* HOME */}
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />
            } />

            {/* ABOUT */}
            <Route path='/about' element={
               <About />
            }/>

            {/* Detail */}
            <Route path='/detail/:id' element={
               <Detail />
            }/>

         </Routes>
         
      </div>
   );
}

export default App;
