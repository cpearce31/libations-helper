import React from 'react';

const Drink = (props) => {
    return (
      <div
        className='drink'
        data-name={props.name}
        onClick={(event) => {
          props.openModal('drink', event.target);
        }}
      >
        <h3 className='drinkInfo' >{props.name}</h3>
        <p className='drinkInfo' >{props.ingredients}</p>
        {props.missingCount === 0 ? null : <h4 className='drinkInfo' >missing {props.missingCount} ingredients</h4>}
      </div>
    );
};

export default Drink;
