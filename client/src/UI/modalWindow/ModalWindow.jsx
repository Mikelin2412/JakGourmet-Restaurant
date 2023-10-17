import React from 'react'
import classes from './modalWindow.module.css'

const ModalWindow = ({children}) => {
  return (
    <div className={classes.modalWindow}>
      <div className={classes.modalWindowContent}>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow
