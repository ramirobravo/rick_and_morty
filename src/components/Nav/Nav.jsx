import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
//ESTAS SE VUELVE VARIABLES
const {container, btn} = styles;


export default function Nav({ onSearch }) {
   return (
      <div className={container}>
         <Link className={btn} to='/home'>Home</Link>
         <Link className={btn} to='/about'>About</Link>
         <Link className={btn} to='/favorites'>Favorites</Link>
         <SearchBar onSearch={onSearch}/>
      </div>
   );
}