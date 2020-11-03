import iPhoneXR from "../images/iPhoneXR.jpg";

function ItemProperties(props) {
  return (
    <div className="row">
      <div className="col-md-3 col-6 text-center">
        <img className="item-image" src={iPhoneXR} alt="iphoneXR" />
      </div>
      <div className="col-md-3 col-6">
        <div className="itemName">{props.item.name}</div>
        <div className="itemProperties">
        <div>Quantity: {props.item.quantity}</div>
          <div>
            {props.item.skuAttributes.color} {props.item.skuAttributes.size}
          </div>
          <div>{props.item.plan}</div>          
        </div>
      </div>
    </div>
  );
}

export default ItemProperties;
