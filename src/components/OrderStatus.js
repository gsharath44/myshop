import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import iPhoneXR from "../images/iPhoneXR.jpg";
import OrderStatusBar from "./OrderStatusBar";
// import ordersData from '../json/orders.json';
import "../css/OrderStatus.css";
import { getData } from '../api/facade';

function OrderStatus() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData()
      .then(res => {
        console.log(res);
        setOrders(res);
      })
  }, []);

  if (!orders || orders.length === 0) {
    return <div className="text-center">No Orders Found!!!</div>;
  }

  return (
    <div className="orderStatusMainLayout">
      {orders.map(order => (
        order.items.map(item => (
          <Link
            id={order.orderId}
            key={order.orderId}
            className="dropdown-item"
            to={`/orderDetail/${order.orderId}/${item.id}`}
          >
            <div className="row pt-5" id={item.id} key={item.id}>
              <div className="col-md-6 col-12 text-center">
                <img src={iPhoneXR} alt="iphoneXR" />
              </div>
              <div className="col-md-6 col-12">
                <OrderStatusBar item={item} order={order} />
                <div className="itemName">{item.name}</div>
                <div className="itemProperties">
                  <div>
                    {item.skuAttributes.color} {item.skuAttributes.size}
                  </div>
                  <div>{item.plan}</div>
                  <div>Qty: {item.quantity}</div>
                </div>
              </div>
            </div>
            <div className="dropdown-divider" />
          </Link>
        ))
      ))}
    </div>
  );
}

export default OrderStatus;
