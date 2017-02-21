import React from 'react';
import Modal from 'react-modal';
import Result from './Result.js';
import data from './data.js';

const AllIngredientsModal = (props) => {
  let all = [];
  for (let i = 0; i < data.ingredients.length; i++) {
    all.push(
      <Result
        name={data.ingredients[i].name}
        openModal={props.openModal}
        closeModal={props.closeModal}
        isIngredient={true}
        addIngredient={props.addIngredient}
        key={i}
      />
    );
  }

  return (
    <Modal
      contentLabel='all'
      isOpen={props.isOpen}
    >
    <button onClick={() => {
      props.closeModal('all');
    }}>X</button>
      <h3>all ingredients</h3>
      {all}
    </Modal>
  );
};

export default AllIngredientsModal;
