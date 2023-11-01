import React, { useContext } from 'react'
import { Context } from '../..'
import AdminHeader from '../../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminOrderCard from '../../UI/adminOrderCard/AdminOrderCard'
import '../../styles/Orders.css'

const Orders = () => {
  const { orders } = useContext(Context);
  console.log(orders.orders);

  return (
    <div>
      <div className='page'>
        <AdminHeader />
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
}

export default Orders
