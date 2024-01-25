import { useSelector } from "react-redux";
import Card from "../Card/Card";


export default function Favorites (){
    const favorites = useSelector(state => state.myFavorites);

    return(
        <div>
            {favorites?.map(fav => (
                <Card
                    name={fav.name}
                    id={fav.id}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                />
            ))}
        </div>
    );
}