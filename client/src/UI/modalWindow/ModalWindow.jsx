import React from 'react'
import './modalWindow.css'

const ModalWindow = ({handleClose, active, setActive, children}) => {
  return (
    <div className={(active) ? 'modal-window active-modal' : 'modal-window'} onClick={() => {
        setActive(false);
        handleClose();
        }}>
      <div className={(active) ? 'modal-window-content active-modal' : 'modal-window-content'} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow
