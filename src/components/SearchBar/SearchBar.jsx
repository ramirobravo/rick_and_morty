import styles from './SearchBar.module.css';
let {div, input, btn} = styles;

export default function SearchBar({ onSearch }) {
   return (
      <div className={div}>
         <input  className={input} type='search' />
         <button className={btn} onClick={onSearch}>Agregar</button>
      </div>
   );
}
