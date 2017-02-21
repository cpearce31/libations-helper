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
      className='modal-ingredient modal'
      overlayClassName='modal-ingredient-overlay modal-overlay'
    >
      <button
        className='btn-close'
        onClick={() => {
          props.closeModal('ingredient');
        }}>&#x2716;</button>
      <h3>{props.ingName}</h3>
      <p>used in: {usedIn(props.ingName, props)}</p>
      <a href={props.url}>more info</a>
    </Modal>
  );
};

export default IngredientModal;
