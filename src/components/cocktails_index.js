import React from 'react';
import {connect} from 'react-redux';
import { updateCurrentCocktail, fetchCocktails } from '../actions'


class CocktailsIndex extends React.Component {

  componentDidMount(){
    this.props.fetchCocktails()
  }

  handleClick(cocktailId) {
      this.props.updateCurrentCocktail(cocktailId)
    }

  render(){
    const renderCocktails = (cocktail) => {
      return (
        <li key={cocktail.id} onClick={this.handleClick.bind(this, cocktail.id)}>
          <a>{cocktail.name}</a>
      </li>)
    }

    return (
      <div>
        <div className='col-md-4'>
          <ul>
            {this.props.cocktails.map(renderCocktails)}
          </ul>
        </div>
        <div className='col-md-8'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  if (state.cocktails){
    return {
      cocktails: state.cocktails
    }
  } else {
    return {cocktails: [{name: "", description: "", instructions: ""}] }
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchCocktails: function() {
      let action = fetchCocktails()
        dispatch(action)
    },
    updateCurrentCocktail: function(cocktailId) {
      let action = updateCurrentCocktail(cocktailId)
        dispatch(action)
    }
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(CocktailsIndex);
