import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

//emula la base de datos
import characters, { Rick } from './data.js';

function App() {

   const onClose = (id) => window.alert(`Emulamos que se cierra la card id ${id}`);

   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} onClose={onClose} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={onClose}
         /> */}
      </div>
   );
}

export default App;
