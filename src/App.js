import "./styles.css";
import { Switch, Route } from "react-router-dom";

// BELOW COMPONENTS
import Home from "./component/home";
import Navbar from "./component/navbar";
import Products from "./component/products";
import Product from "./component/product";
import Cart from "./component/cart";

export default function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}
