import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationComponent";

function App() {
  const [cartItem, setCartItem] = useState(0);
  return (
    <>
      <NavigationBar item={cartItem} />
    </>
  );
}

export default App;
