import { useEffect, useState } from 'react';
// import details from "../json/order.json";
import { useParams } from "react-router-dom";
import ItemProperties from "./ItemProperties";
import OrderDetailsHeader from "./OrderDetailsHeader";
import { getDetails } from '../api/facade';
import "../css/orderDetail.css";

function OrderDetail() {
  let { orderId, itemId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails(orderId)
      .then(res => {
        console.log(res);
        setDetails(res);
      })
  }, [orderId, itemId]);
  if (!details) {
    return (
      <div className="text-center">
        Order detail is not available for ID - {orderId}
      </div>
    );
  }

  return (
    <div className="pt-3">
      {details.shipments &&
        details.shipments.map(shipment => {
          return (
            <div id={shipment.id} key={shipment.id}>
              <OrderDetailsHeader shipment={shipment} items={details.items} itemId={itemId} />

              {shipment.items.map((itemId) => {
                return (
                  <div id={itemId} key={itemId}>
                    {details.items.map(item => {
                      return (
                        <div>
                          {itemId === item.id ? (
                            <ItemProperties item={item} />
                          ) : (
                              ""
                            )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              <div className="dropdown-divider" />
            </div>
          );
        })}
    </div>
  );
}

export default OrderDetail;
