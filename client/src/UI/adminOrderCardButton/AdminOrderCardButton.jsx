import React from 'react'
import classes from './AdminOrderCardButton.module.css'

const AdminOrderCardButton = ({ children, type }) => {
    let background;
    switch (type) {
        case 'reject':
            background = '#CC1A1A';
            break;
        case 'approve':
            background = '#31B22E';
            break;
    }

    return (
        <button className={classes.adminOrderCardButton} style={{backgroundColor: background}}>
            {children}
        </button>
    )
}

export default AdminOrderCardButton
