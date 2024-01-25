import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import axios from 'axios';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
   //creando un estado local
   const [characters, setCharacters] = useState([]); // --> [state, changeState] memoria 2

   const [ access, setAccess ] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();

   //DB FALSA
   const EMAIL = 'batman@gmail.com';
   const PASSWORD = 'robin1234';
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData) {
      if (userData.password === PASSWORD && userData.username === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

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
         { 
            location.pathname !== '/' ?
            <Navbar onSearch={onSearch} /> :
            undefined
         }
         
         <Routes>
            {/* LOGIN */}
            <Route path='/' element={
               <Form login={login} />
            }/>

            {/* HOME */}
            <Route path='/Home' element={
               <Cards 
                  characters={characters}
                  onClose={onClose}
               />
            }/>

            {/* ABOUT */}
            <Route path='/About' element={
               <About />
            }/>

            {/* DETAIL */}
            <Route path='/detail/:detailId' element={<Detail />}/>
         
            {/* FAVORITES */}
            <Route path='/favorites' element={<Favorites />}/>

         </Routes>
         
      </div>
   );
}

const myArr= [0] //memoria1

// myArr.push('batman'); //memoria1

const myArr2 = [...myArr, 'batman'] //memori4



export default App;
