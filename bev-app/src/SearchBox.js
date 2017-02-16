import React, {Component} from 'react';
import {autocomplete} from './helpers.js';
import Result from './Result.js';

class SearchBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      suggestions: []
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (e) {
    this.setState({
      suggestions: autocomplete(e.target.value)
    });
  }

  render () {
    let key = 0;
    return (
      <div>
        <div>
          <h1>Tippler</h1>
          <h3>Because you're too old for Mountain Dew and vodka.</h3>
          <p>With this interactive list of 50 classic cocktails, you can step up your game. Just search for the ingredients you have on hand, add them to your bar, and find out what you can make. You can also browse by ingredients, or click on a cocktail for more information.</p>
        </div>
        <div>
          <button
            onClick={() => {
              this.props.openModal('all');
              console.log('triggered it');
            }}
          >Browse All Ingredients</button>
          <form>
            <input type="text" onChange={this.handleInput}/>
          </form>
          <div>
            {this.state.suggestions.map((elem) => {
              key++;
              return <Result
                        isIngredient={!elem.procedure}
                        name={elem.name}
                        key={key}
                        addIngredient={this.props.addIngredient}
                        openModal={this.props.openModal}
                     />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
