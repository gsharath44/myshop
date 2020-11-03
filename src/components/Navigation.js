import OrderStatus from "./OrderStatus";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../css/index.css";

function Navigation() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">MyShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link dropdown-toggle" href="/">Products <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/">Brands</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/">Deals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/">Services</a>
            </li>            
          </ul>
          <ul className="navbar-nav right-nav-items">
            <li className="nav-item accountItems">
              <AccountCircleIcon  color="primary" fontSize="small"/>
              <a className="nav-link dropdown-toggle" href="/">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/">Recently Viewed</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Order Status
              </a>
              <div className="dropdown-menu my-dropdown" aria-labelledby="navbarDropdown">
                <OrderStatus />
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/">Saved Items</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
