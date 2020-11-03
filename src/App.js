// import logo from './logo.svg';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderDetail from "./components/OrderDetail";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/orderDetail/:orderId/:itemId">
          <OrderDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
