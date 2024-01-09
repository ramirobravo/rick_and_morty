import SearchBar from '../SearchBar/SearchBar';
import styles from './navbar.module.css';
let { container } = styles;

export default function Navbar({ onSearch }) {
   return <div className={container}>
    <SearchBar onSearch={onSearch}/>
   </div>;
}