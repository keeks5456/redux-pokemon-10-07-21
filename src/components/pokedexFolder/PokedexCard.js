import { Card, Image } from "./pokedexStyling";

const PokedexCard = ({ pokemonInfo }) => {
  // console.log(pokemonInfo);
  return (
    <Card>
      <p>{pokemonInfo.name}</p>
    </Card>
  );
};

export default PokedexCard;
