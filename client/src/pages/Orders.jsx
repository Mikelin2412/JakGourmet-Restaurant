import React, { useEffect, useContext } from 'react'
import { Context } from '..'
import Header from '../components/Header'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import AdminOrderCard from '../UI/adminOrderCard/AdminOrderCard'
import '../styles/Orders.css'
import { getAllOrders } from '../http/OrdersAPI'
import { observer } from 'mobx-react-lite'

const Orders = observer(() => {
  const { user, orders } = useContext(Context);

  useEffect(() => {
    getAllOrders()
      .then(data => orders.setOrders(data))
      .catch(err => alert(err))
  }, []);

  console.log(orders.orders)

  return (
    <div>
      <div className='page'>
        {user.role === 'ADMIN' ?
          <AdminHeader />
          :
          <Header />
        }
        <div className='orders-section'>
          {
            orders.orders.map((order, id) =>
              <AdminOrderCard
                key={id}
                order={order} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  )
})

export default Orders
