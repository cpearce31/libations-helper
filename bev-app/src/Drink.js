import React from 'react';

let drinkStyle = {
  height: 200,
  width: 200,
  border: '1px solid gray',
  display: 'inline-block',
  margin: 20,
  padding: 10

};

const Drink = (props) => {
  if (props.canMake) {
    return (
      <div
        className='drink'
        style={Object.assign(drinkStyle, props.style)}
        data-name={props.name}
        onClick={(event) => {
          props.openModal('drink', event.target);
        }}
      >
        <h3 className='drinkInfo' >{props.name}</h3>
        <p className='drinkInfo' >{props.ingredients}</p>
      </div>
    );
  } else {
    return (
      <div
        className='drink'
        style={drinkStyle}
        data-name={props.name}
        onClick={(event) => {
          props.openModal('drink', event.target);
        }}
      >
        <h3 className='drinkInfo' >{props.name}</h3>
        <p className='drinkInfo' >{props.ingredients}</p>
        <h4 className='drinkInfo' >Missing {props.missingCount} ingredients</h4>
      </div>
    );
  }
};

export default Drink;
