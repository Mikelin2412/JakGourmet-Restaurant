import React, { useEffect, useContext } from 'react'
import { Context } from '..'
import Header from '../components/Header'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import AdminOrderCard from '../UI/adminOrderCard/AdminOrderCard'
import '../styles/Orders.css'
import { getAllOrders, getDefiniteReservations } from '../http/OrdersAPI'
import { observer } from 'mobx-react-lite'

const Orders = observer(() => {
  const { user, orders } = useContext(Context);

  useEffect(() => {
    if (user.role === 'ADMIN') {
      getAllOrders()
        .then(data => orders.setOrders(data))
        .catch(err => alert(err))
    } else {
      getDefiniteReservations(user.user.id)
        .then(data => orders.setOrders(data))
        .catch(err => alert(err))
    }
  }, []);

  return (
    <div>
      <div className='page'>
        {user.role === 'ADMIN' ?
          <AdminHeader />
          :
          <Header />
        }
        {
          (orders.orders.length !== 0) ?
            <div className='orders-section'>
              {
                orders.orders.map((order, id) =>
                  <AdminOrderCard
                    key={id}
                    order={order} />)
              }
            </div>
            :
            <h1 className='orders__empty-list'>Список заказов пуст!</h1>
        }
      </div>
      <Footer />
    </div>
  )
})

export default Orders
