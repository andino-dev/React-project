import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Modal = () => {
  const{isOpenModal,closeModal} = useGlobalContext();
  console.log(isOpenModal);
  return(
    <div className={`${isOpenModal ? "modal-overlay show-modal":"modal-overlay"}`}>
     <div className="modal-container">
       <h3> MODAL CONTENT</h3>
       <button className="close-modal-btn" onClick={closeModal}>
         <FaTimes/>
       </button>
       
     </div>
    </div>
  )
}

export default Modal
