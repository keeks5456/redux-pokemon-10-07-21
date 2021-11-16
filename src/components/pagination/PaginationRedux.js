
const PaginationRedux = ({nextPokePage, prevPokePage}) => {

  return (
    <div>
    {prevPokePage && <button onClick={prevPokePage}>NEXT</button>}
    {nextPokePage && <button onClick={nextPokePage}>PREVIOUS</button>}
    </div>
  )
}

export default PaginationRedux
