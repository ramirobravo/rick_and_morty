import SearchBar from '../SearchBar/SearchBar';
import styles from './navbar.module.css';
import { Link } from "react-router-dom";
let { container, link } = styles;


export default function Navbar({ onSearch }) {
   return <div className={container}>
      <Link className={link} to='/about'>About</Link>
      <Link className={link} to='/home'>Home</Link>
      <Link className={link} to='/favorites'>Favorites</Link>
    <SearchBar onSearch={onSearch}/>
   </div>;
}