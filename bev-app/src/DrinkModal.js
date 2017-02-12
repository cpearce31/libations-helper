import Modal from 'react-modal';
import React from 'react';
import {formatAmount} from './helpers.js'

const modalStyle = {
  content: {
    top: 200,
    left: 200,
    bottom: 200,
    right: 200
  }
};

const DrinkModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel='drinkModal'
      style={modalStyle}
    >
      <button onClick={() => {
        props.closeModal('drink');
      }}>X</button>
      <h3>{props.drinkName}</h3>
      <ul>
        {Object.keys(props.amounts).map((key, i, obj) => {
          return (<li key={i}>{formatAmount(props.amounts[key]) + key}</li>);
        })}
      </ul>
      <p>{props.procedure}</p>
    </Modal>
  );
};

export default DrinkModal;
