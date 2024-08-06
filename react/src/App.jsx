import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationComponent";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import ErrorPage from "./errorPage";
import Clothes from "./components/Clothing/Clothes";

function App() {
  const [cartItem, setCartItem] = useState(0);
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
          <Route index element={ <HomePage/> } />
          <Route path="clothing" element={<Clothes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
