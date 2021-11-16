
const PaginationRedux = ({nextPokePage, prevPokePage, goToNextPage, goToPrevPage}) => {

  return (
    <div>
    {prevPokePage && <button onClick={goToPrevPage}>PREVIOUS</button>}
    {nextPokePage && <button onClick={goToNextPage}>NEXT</button>}
    </div>
  )
}

export default PaginationRedux
