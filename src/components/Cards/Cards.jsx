import Card from '../Card/Card';

export default function Cards({ characters, onClose }) {
   return <div>
      {
         characters.map(({id, name, species, gender, image}) => <Card 
            id={id}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={()=> onClose(id)}
         />)
      }
   </div>;
}
