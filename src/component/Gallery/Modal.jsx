import React from 'react'
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";

import img from '/img/5.png'

import './Modal.css'

const Modal = ({ show, onClose, title, children}) =>{
    return(
      show && (
        <>
        <div className="modal-backdrop" onClick={onClose}></div>
          <div className={`modal-wrapper ${show ? 'active' :''}`}>
          <div className="modal-container">
            <div className="modal-header">
             <div className="modal-title">{title}</div>
              <div onClick={onClose} className='modal-close'><img src={img} alt="" /></div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
        </>
      )
    )
  }
  export default Modal

  
//   import React, { useState } from 'react'
//   import './Modal.css'
//   const Modal = () => {
//       const [show, setShow] = useState(false)
  
//     return (
//       <div className='modal-main'>
//           <button onClick={() => setShow(true)}>
//               {show ? "hide" : "show"}modal
//           </button>
//           <Modals show={show} title='Modal' onClose={() => setShow(false)}>
//           <h2>Modal here</h2>
//           </Modals>
//       </div>
//     )
//   }
  
//   export default Modal
//   const Modals = ({ show, onClose, title, children}) =>{
//       return(
//         show && (
//           <>
//           <div className="modal-backdrop" onClick={onClose}></div>
//           <div className={`modal-wrapper ${show ? 'active' :''}`}>
//           <div className="modal-header">
//             <div className="modal-title">{title}</div>
//             <span className='modal-close' onClick={onClose}>x</span>
//           </div>
//           <div className="modal-body">{children}</div>
//           </div>
//           </>
//         )
//       )
//     }
  



