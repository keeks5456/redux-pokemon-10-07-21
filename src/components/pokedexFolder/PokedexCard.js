import { Card, Image } from "./pokedexStyling";



const PokedexCard = ({ pokemonInfo }) => {  
  console.log(pokemonInfo);
  return( 
    <Card>
      <p>{pokemonInfo.name}</p>
      <Image src={pokemonInfo.url} alt={pokemonInfo.name}></Image>
    </Card>)
};

export default PokedexCard;
