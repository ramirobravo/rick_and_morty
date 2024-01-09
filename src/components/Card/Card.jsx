import styles from './Card.module.css';

let { div, nameStyle, imageStyle, btn, data } = styles;

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={div}>
         <button onClick={()=>(onClose(id))} className={btn}>X</button>
         <h2 className={nameStyle}>{name}</h2>
         <h2 className={data}>
            {status}
         </h2>
         <h2 className={data}>{species}</h2>
         <h2 className={data}>{gender}</h2>
         <h2 className={data}>{origin}</h2>
         <img src={image} alt='' className={imageStyle} />
      </div>
   );
}
