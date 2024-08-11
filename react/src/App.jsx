import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationComponent";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import ErrorPage from "./errorPage";
import Clothes from "./components/Clothing/Clothes";
import useProductList from "./functions/getProducts";
import Cart from "./components/Cart/Cart";
import Carousel from "./components/Slider/carousel";
import Footer from "./Footer";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const { jewellry, electronics, menClothing, womenClothing } =
    useProductList();

  function addToCart(item) {
    setCartItem([...cartItem, item]);
  }

  function removeFromCart(itemName) {
    const itemToRemove = cartItem.find((item) => item.title.includes(itemName));
    setCartItem(
      cartItem.filter((_, i) => i !== cartItem.lastIndexOf(itemToRemove)),
    );
   
  }
  const content = () => {
    return { jewellry, electronics, menClothing, womenClothing };
  };
  const clothes = () => {
    return { menClothing, womenClothing };
  };
  return (
    <>
      <NavigationBar item={cartItem} />
      <Carousel />
      <Outlet />
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home">
          <Route index element={<HomePage content={content} />} />
          <Route
            path="clothing/:gender"
            element={<Clothes cart={addToCart} item={clothes} />}
          />
          <Route  />
          <Route />
          <Route />
        </Route>
        <Route
          path="bag"
          element={
            <Cart item={cartItem} add={addToCart} remove={removeFromCart} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
