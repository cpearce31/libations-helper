import Modal from 'react-modal';
import React from 'react';
import {usedIn} from './helpers.js';

const modalStyle = {
  content: {
    top: 200,
    left: 200,
    bottom: 200,
    right: 200
  }
};

const IngredientModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel='ingModal'
      style={modalStyle}
    >
      <button onClick={() => {
        props.closeModal('ingredient');
      }}>X</button>
      <h3>{props.ingName}</h3>
      <p>used in: {usedIn(props.ingName, props)}</p>
      <a href={props.url}>more info</a>
    </Modal>
  );
};

export default IngredientModal;
