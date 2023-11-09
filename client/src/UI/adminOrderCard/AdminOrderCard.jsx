import React from 'react'
import AdminOrderCardButton from '../adminOrderCardButton/AdminOrderCardButton';
import classes from './adminOrderCard.module.css';

const AdminOrderCard = ({ order }) => {
  return (
    <div className={classes.adminOrderCard}>
      <h1 className={classes.adminOrderCardTitle}>Заказ №{order.id}</h1>
      <div className={classes.adminOrderCardInfo}>
        <p>Пользователь: {order.user}</p>
        <p>Дата создания: {order.date_of_creation}</p>
        <p>Дата бронирования: {order.reservation_date}</p>
        <p>Время бронирования: {order.reservation_time}</p>
        <p>Статус бронирования: {order.status}</p>
        <p>Телефон: {order.telephone}</p>
        <p>Номер столика: {order.table_number}</p>
      </div>
      <div className={classes.adminOrderCardButtons}>
        <AdminOrderCardButton type='reject'>Отклонить</AdminOrderCardButton>
        <AdminOrderCardButton type='approve'>Одобрить</AdminOrderCardButton>
      </div>
    </div>
  )
}

export default AdminOrderCard