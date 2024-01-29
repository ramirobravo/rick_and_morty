import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
//ESTAS SE VUELVE VARIABLES
const {div} = styles;


export default function Nav({ onSearch }) {
   return (
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
   );
}