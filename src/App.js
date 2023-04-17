import Header from "./components/Header/Header";
import Productslist from "./components/Products/ProductsList";
import CartState from "./store/CartState";

import "./App.css";

const App = () => {
  return (
    <>
      <CartState>
        <Header />
        <Productslist />
      </CartState>
    </>
  );
};

export default App;
