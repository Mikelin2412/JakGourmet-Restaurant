import React, { useContext } from 'react'
import AdminOrderCardButton from '../adminOrderCardButton/AdminOrderCardButton';
import { updateReservation } from '../../http/OrdersAPI';
import classes from './adminOrderCard.module.css';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const AdminOrderCard = observer(({ order }) => {
  const { user, orders } = useContext(Context);
  const updateCurrentReservation = (id, status) => {
    updateReservation(id, status)
      .then(data => {
        const index = orders.orders.findIndex((order) => order.reservation.id === data.reservation.id);
        if (index !== -1) {
          const updatedOrders = [...orders.orders];
          updatedOrders[index] = data;
          orders.setOrders(updatedOrders);
        }
      })
      .catch(err => {
        console.log('Произошла ошибка при обновлении статуса бронирования: ' + err)
      })
  }

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
      {
        user.role === 'ADMIN' ?
          <div className={classes.adminOrderCardButtons}>
            <AdminOrderCardButton
              type='reject'
              handleFunction={() => updateCurrentReservation(order.reservation.id, 'Отклонено')}>Отклонить</AdminOrderCardButton>
            <AdminOrderCardButton
              type='approve'
              handleFunction={() => updateCurrentReservation(order.reservation.id, 'Одобрено')}>Одобрить</AdminOrderCardButton>
          </div>
          :
          <div className={classes.adminOrderCardButtons}>
            <AdminOrderCardButton
              type='reject'
              handleFunction={() => updateCurrentReservation(order.reservation.id, 'Бронирование отменено')}>Отменить бронирование</AdminOrderCardButton>
          </div>
      }
    </div>
  )
})

export default AdminOrderCard