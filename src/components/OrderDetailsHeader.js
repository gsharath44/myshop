import HomeIcon from "@material-ui/icons/Home";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import moment from "moment";
import "../css/orderDetail.css";

function OrderDetailsHeader(props) {

  let shipmentStatus;
  let shipmentDescription;
  let shipmentHeading;
  let orderedColor = "primary";
  let shippedColor = "primary";
  let deliveredColor = "primary";
  let orderAlert = false;

  // fetch the shipment details from order boject using item id

  // const itemData = props.shipment.items.map(itemId => {
  //   return props.items.find(item=> item.id === itemId)
  // });
  // console.log('sara', itemData);
  const item = props.items.find(it => it.id == props.itemId)
  console.log('sara2', item);

  if (item.status === "ordered") { 
    shipmentStatus = "Item ordered: ";

    if (item.newEstimatedShipDateRange) {
      shipmentHeading= "Heads up: The shipping date changed.";
      shipmentDescription= "Before we can complete your order, review the new date to confirm if you're OK with it";
      orderAlert = true;
      // shipmentStatus +=
      //   moment(item.newEstimatedShipDateRange.fromDate).format(
      //     "MMM DD-"
      //   ) +
      //   moment(item.newEstimatedShipDateRange.toDate).format(
      //     "MMM DD, YYYY"
      //   );
    } else {
      shipmentHeading= "Order will be shipped.";
      shipmentDescription= "We are proccessing your order.";
      // shipmentStatus +=
      //   moment(item.estimatedShipDateRange.fromDate).format("MMM DD-") +
      //   moment(item.estimatedShipDateRange.toDate).format("MMM DD, YYYY");
    }

    shippedColor = "disabled";
    deliveredColor = "disabled";
  } else if (item.status === "shipped") {
    shipmentHeading= "Order on the way.";
    shipmentDescription= "Fun stuff is heading your way!";
    shipmentStatus = "Items shipped: ";
      //moment(item.estimatedDeliveryDate).format("MMMM DD, YYYY");

    deliveredColor = "disabled";
  } else {
    shipmentHeading= "Get excited!";
    shipmentDescription= "Fun stuff is headed your way!";
    shipmentStatus = "Items delivered: ";
      //moment(item.estimatedDeliveryDate).format("MMMM DD, YYYY");
  }

  return (
    <div className="p-4">
      <b>{shipmentHeading}</b>
      <div className="shipmentDesc pb-2">{shipmentDescription}</div>
      <div className="pt-4 row text-center">
        <div className="col-md-3 col-4">
          <CheckCircleIcon color={orderedColor} fontSize="large" />
          <div className={"statusBar " + orderedColor + "-stat-color"} />
          <div className={orderedColor + "-font-color"}>Ordered</div>
        </div>
        <div className="col-md-3 col-4">
          <LocalShippingIcon color={shippedColor} fontSize="large" />
          <div className={"statusBar " + shippedColor + "-stat-color"} />
          <div className={shippedColor + "-font-color"}>Shipped</div>
        </div>
        <div className="col-md-3 col-4">
          <HomeIcon color={deliveredColor} fontSize="large" />
          <div className={"statusBar " + deliveredColor + "-stat-color"} />
          <div className={deliveredColor + "-font-color"}>Delivered</div>
        </div>
      </div>
      <div className="itemOrdered">{shipmentStatus}{item.length}</div>
      {orderAlert ? 
      <div className="shipmentDesc pb-2">Don't forget to let us know id you accept the new ship date. We'll cancel your order if we don't hear from you soon.</div>
      :""}
      
    </div>
  );
  }
  
  export default OrderDetailsHeader;
  