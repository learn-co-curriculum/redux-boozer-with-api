import React from 'react'
import { connect } from 'react-redux'
import { createCocktail } from '../actions'


class CocktailCreate extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    cocktail: {
      name: "",
      description: "",
      instructions: ""
    }
  }
}

  handleSubmit(event){
    event.preventDefault()
    this.props.addCocktail(this.state.cocktail)
    this.setState({cocktail: ''})
  }

  handleInput(key, event){
    const cocktail = this.state.cocktail
    cocktail[key] = event.target.value
    this.setState({ cocktail })
  }

  render(){
    return(
      <div>
        <h1>Add a Cocktail - WOO! </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' value={this.state.cocktail.name} onChange={this.handleInput.bind(this, 'name')}/>
          <input type='text' value={this.state.cocktail.description} onChange={this.handleInput.bind(this, 'description')}/>
          <input type='text' value={this.state.cocktail.instructions} onChange={this.handleInput.bind(this, 'instructions')}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    addCocktail : function(cocktail){
      let action = addCocktail(cocktail)
      dispatch( action )
    }
  }
}

export default connect(null, mapDispatchToProps)(CocktailCreate)
