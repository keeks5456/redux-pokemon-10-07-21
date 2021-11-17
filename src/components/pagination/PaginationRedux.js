import { Button } from "../pokedexFolder/pokedexStyling"
const PaginationRedux = ({nextPokePage, prevPokePage, goToNextPage, goToPrevPage}) => {

  return (
    <div>
    {prevPokePage && <Button onClick={goToPrevPage}>PREVIOUS</Button>}
    {nextPokePage && <Button onClick={goToNextPage}>NEXT</Button>}
    </div>
  )
}

export default PaginationRedux
