import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationComponent";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import ErrorPage from "./errorPage";
import Clothes from "./components/Clothing/Clothes";
import useProductList from "./functions/getProducts";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const { jewellry, electronics, menClothing, womenClothing } = useProductList()
  

  function addToCart(item) {
    setCartItem([...cartItem, item])
  }

  function removeFromCart(index) {
    setCartItem(cartItem.filter((_, i)=> index !== i ))
  }
  const content = () => {
    return { jewellry, electronics, menClothing, womenClothing };
  }
  return (
    <>
      <NavigationBar item={cartItem} />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace={true} />}
        />
        <Route path="/home" >
          <Route index element={<HomePage content={ content } /> } />
          <Route path="clothing" element={<Clothes cart={addToCart} />} />
          <Route path="jewelery" element />
          <Route />
          <Route />
        </Route>
        <Route path="bag" element={<Cart item={cartItem} /> } /> 
      </Routes>
    </>
  );
}

export default App;
