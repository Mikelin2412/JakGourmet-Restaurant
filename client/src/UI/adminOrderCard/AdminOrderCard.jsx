import React from 'react'
import AdminOrderCardButton from '../adminOrderCardButton/AdminOrderCardButton';
import classes from './adminOrderCard.module.css';

const AdminOrderCard = ({ order }) => {
  return (
    <div className={classes.adminOrderCard}>
      <h1 className={classes.adminOrderCardTitle}>Заказ №{order.reservation.id}</h1>
      <div className={classes.adminOrderCardInfo}>
        <p>Пользователь: {order.name}</p>
        <p>Дата создания: {order.reservation.dateOfCreation}</p>
        <p>Дата бронирования: {order.reservation.dateOfReservation}</p>
        <p>Время бронирования: {order.reservation.timeOfReservation}</p>
        <p>Статус бронирования: {order.reservation.status}</p>
        <p>Телефон: {order.reservation.telephone}</p>
        <p>Номер столика: {order.reservation.numberOfTable}</p>
      </div>
      <div className={classes.adminOrderCardButtons}>
        <AdminOrderCardButton type='reject'>Отклонить</AdminOrderCardButton>
        <AdminOrderCardButton type='approve'>Одобрить</AdminOrderCardButton>
      </div>
    </div>
  )
}

export default AdminOrderCard