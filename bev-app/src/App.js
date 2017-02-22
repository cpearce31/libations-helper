import React, { Component } from 'react';
import data from './data.js';
import SearchBox from './SearchBox.js';
import DrinksBox from './DrinksBox.js';
import Bar from './Bar.js';
import DrinkModal from './DrinkModal.js';
import {canIMake} from './helpers.js';
import IngredientModal from './IngredientModal.js';
import SuggestionBox from './SuggestionBox.js';
import AllIngredientsModal from './AllIngredientsModal.js';

var globalSelf;

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      bar: [],
      drinkModalOpen: false,
      drinkModalName: data.drinks[0].name,
      drinkModalAmounts: data.drinks[0].amounts,
      drinkModalProcedure: data.drinks[0].procedure,
      ingModalOpen: false,
      ingModalName: '',
      ingModalLink: '',
      allIngModalOpen: false,
      suggestions: [
        'simple syrup',
        'lemon juice',
        'lemon peel',
        'lemon wheel',
        'soda water',
        'rye',
        'gin',
        'lime juice',
        'lime wheel',
        'orange juice',
        'grapefruit juice',
        'sparkling wine',
        'egg white',
        'mint'
      ],
      dimensions: {x: window.innerWidth, y: window.innerHeight},
      viewWidth: window.innerWidth,
      viewHeight: window.innerHeight,
      resizeTimeout: null
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.removeSuggestion = this.removeSuggestion.bind(this);
    this.resize = this.resize.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  resize () {
    if (!this.state.resizeTimeout) {
      let timeout = setTimeout(() => {
        let dimensions = {x: window.innerWidth, y: window.innerHeight};
        this.setState({
          resizeTimeout: null,
          dimensions: dimensions
        });
      }, 66);
      this.setState({
        resizeTimeout: timeout
      });
    }
  }

  componentDidMount () {
    globalSelf = this;
    window.addEventListener('resize', () => {
      globalSelf.resize();
    }, false);
  }

  removeIngredient (target) {
    let ingredient = target.previousSibling.textContent;
    let index = this.state.bar.indexOf(ingredient);
    let newBar = this.state.bar;
    newBar.splice(index, 1);
    this.setState({
      bar: newBar
    });
  }

  addIngredient (target) {
    let ingredient = target.dataset.ingredient;
    if (this.state.bar.indexOf(ingredient) === -1) {
      let newBar = this.state.bar.slice(0);
      this.removeSuggestion(ingredient);
      newBar.push(ingredient);
      this.setState({
        bar: newBar
      });
    }
  }

  removeSuggestion (ingredients) {
    for (let i = 0; i < ingredients.length; i++) {
      let suggestIndex = this.state.suggestions.indexOf(ingredients[i]);
      if (suggestIndex !== -1) {
        let newSuggestions = this.state.suggestions;
        newSuggestions.splice(suggestIndex, 1);
        this.setState({
          suggestions: newSuggestions
        });
      }
    }
  }

  openModal (type, target) {
    if (target.className === 'btn-add') {
      return;
    }
    if (type === 'drink') {
      if (target.className !== 'result') {
        target = target.parentNode;
      }
      for (let i = 0; i < data.drinks.length; i++) {
        if (data.drinks[i].name === target.dataset.name) {
          this.setState({
            drinkModalOpen: true,
            drinkModalName: data.drinks[i].name,
            drinkModalAmounts: data.drinks[i].amounts,
            drinkModalProcedure: data.drinks[i].procedure
          });
        }
      }
    } else if (type === 'ingredient') {
      let name = target.dataset.name;
      if (target.className !== 'result') {
        name = target.parentNode.dataset.name;
      }
      let index;
      for (let i = 0; i < data.ingredients.length; i++) {
        if (data.ingredients[i].name === name) {
          index = i;
        }
      }
      this.setState({
        ingModalName: name,
        ingModalLink: data.ingredients[index].link,
        ingModalOpen: true
      });
    } else if (type === 'all') {
      this.setState({
        allIngModalOpen: true
      });
    }
  }

  closeModal (type) {
    if (type === 'drink') {
      this.setState({
        drinkModalOpen: false
      });
    } else if (type === 'ingredient') {
      this.setState({
        ingModalOpen: false
      });
    } else if (type === 'all') {
      this.setState({
        allIngModalOpen: false
      });
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='inner-wrapper'>
          <AllIngredientsModal
            isOpen={this.state.allIngModalOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
            dimensions={this.state.dimensions}
            addIngredient={this.addIngredient}
          />
          <IngredientModal
            isOpen={this.state.ingModalOpen}
            ingName={this.state.ingModalName}
            url={this.state.ingModalLink}
            closeModal={this.closeModal}
            openModal={this.openModal}
            dimensions={this.state.dimensions}
          />
          <DrinkModal
            isOpen={this.state.drinkModalOpen}
            drinkName={this.state.drinkModalName}
            amounts={this.state.drinkModalAmounts}
            procedure={this.state.drinkModalProcedure}
            closeModal={this.closeModal}
            dimensions={this.state.dimensions}
          />
        <div className='bar-wrapper'>
          <Bar
            bar={this.state.bar}
            removeIngredient={this.removeIngredient}
            openModal={this.openModal}
            dimensions={this.state.dimensions}
            suggestions={this.state.suggestions}
            removeSuggestion={this.removeSuggestion}
          />
          <SearchBox
            addIngredient={this.addIngredient}
            openModal={this.openModal}
            dimensions={this.state.dimensions}
          />
        </div>
        <DrinksBox
          openModal={this.openModal}
          canMake={canIMake(this.state.bar, data.drinks).canMake}
          cantMake={canIMake(this.state.bar, data.drinks).cantMake}
          dimensions={this.state.dimensions}
        />
        </div>
      </div>
    );
  }
}

export default App;
