import HomeIcon from "@material-ui/icons/Home";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import moment from "moment";
import "../css/OrderStatus.css";

function OrderStatusBar(props) {
  let shipmentStatus;
  let orderedColor = "primary";
  let shippedColor = "primary";
  let deliveredColor = "primary";

  // fetch the shipment details from order boject using item id

  const shipmentData = props.order.shipments.find(shipment => {
    return shipment.items.find(element => element === props.item.id);
  });

  if (props.item.status === "ordered") {
    shipmentStatus = "Expected to ship: ";

    if (props.item.newEstimatedShipDateRange) {
      shipmentStatus +=
        moment(props.item.newEstimatedShipDateRange.fromDate).format(
          "MMM DD-"
        ) +
        moment(props.item.newEstimatedShipDateRange.toDate).format(
          "MMM DD, YYYY"
        );
    } else {
      shipmentStatus +=
        moment(props.item.estimatedShipDateRange.fromDate).format("MMM DD-") +
        moment(props.item.estimatedShipDateRange.toDate).format("MMM DD, YYYY");
    }

    orderedColor = "error";
    shippedColor = "disabled";
    deliveredColor = "disabled";
  } else if (props.item.status === "shipped") {
    shipmentStatus =
      "Expected to deliver: " +
      moment(shipmentData.estimatedDeliveryDate).format("MMMM DD, YYYY");
    orderedColor = "error";
    shippedColor = "error";
    deliveredColor = "disabled";
  } else {
    shipmentStatus =
      "Arrived: " +
      moment(shipmentData.estimatedDeliveryDate).format("MMMM DD, YYYY");
  }

  return (
    <div>
      <div className="pt-4 row text-center">
        <div className="col-md-4 col-4">
          <AssignmentReturnedIcon color={orderedColor} fontSize="large" />
          <div className={"statusBar " + orderedColor + "-status-color"} />
        </div>
        <div className="col-md-4 col-4">
          <LocalShippingIcon color={shippedColor} fontSize="large" />
          <div className={"statusBar " + shippedColor + "-status-color"} />
        </div>
        <div className="col-md-4 col-4">
          <HomeIcon color={deliveredColor} fontSize="large" />
          <div className={"statusBar " + deliveredColor + "-status-color"} />
        </div>
      </div>
      <div className="itemProperties pb-2">{shipmentStatus}</div>
    </div>
  );
}

export default OrderStatusBar;
