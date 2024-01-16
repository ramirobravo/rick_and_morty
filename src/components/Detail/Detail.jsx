import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css"

const Detail = ()=>{
    let { detailId } = useParams(); // { detailId: value }
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
                 console.log(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [detailId]);

    return (
        <div className={styles.container}>
          <div className={styles.personcontainer}>
            <Link to='/home' className={styles.cit}><button>To Home</button></Link>
            <div className={styles.info}>
              <h1>{character.name}</h1>
              <h2>{character.gender}</h2>
              <h2>{character.status}</h2>
              <h2>{character.origin?.name}</h2>
              <h2>{character.location?.name}</h2>
              <img src={character.image} alt='not found'/>
            </div>
          </div>
        </div>
    )
}

export default Detail;