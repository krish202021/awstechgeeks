import React, { Component, useState } from 'react'
import Modal from 'react-modal';
export default function ModelPopup(props) {
  const [model, setModel] = useState('false');
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const closeModal = () =>{
    alert('ok')
    setModel(false)
  }

  
  return (
    <>
      <Modal
        isOpen={props.modal}
        //onAfterOpen={afterOpenModal}
        //onRequestClose={model}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={props.image}/>
      </Modal>
    </>
  )
}
