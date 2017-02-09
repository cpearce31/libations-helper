import React, {Component} from 'react';
import {autocomplete} from './helpers.js';
import Result from './Result.js';

const inputStyle = {
  width: 300,
  padding: 10
};

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
        <form>
          <input style={inputStyle} type="text" onChange={this.handleInput}/>
        </form>
        <div>
          {this.state.suggestions.map((elem) => {
            key++;
            return <Result
                      isIngredient={!elem.procedure}
                      name={elem.name}
                      key={key}
                      addIngredient={this.props.addIngredient}
                   />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchBox;
