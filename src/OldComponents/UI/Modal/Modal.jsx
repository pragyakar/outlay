import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = (props) => {
  
  const el = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [])
  const { children } = props;
  return ReactDOM.createPortal(children, el);
}

export default Modal;