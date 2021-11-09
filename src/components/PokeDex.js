import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllFromPokedex } from '../redux/actions/pokedexActions'

const PokeDex = ({fetchAllFromPokedex, pokedexData}) => {

  useEffect(() =>{
    fetchAllFromPokedex()
  }, [fetchAllFromPokedex])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    pokedexData: state.pokedex
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchAllFromPokedex: () => dispatch(fetchAllFromPokedex())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokeDex)
