import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllFromPokedex } from '../redux/actions/pokedexActions'
const PokeDex = ({fetchAllFromPokedex}) => {


  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchAllFromPokedex: () => dispatch(fetchAllFromPokedex())
  }
}


export default connect(null, mapDispatchToProps)(PokeDex)
