import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navigationBar.module.css";
//import { useState } from "react"

const NavigationBar = ({ item }) => {
  //const [item, setItem] = useState(0)
  return (
    <div className={styles.Nav}>
      <h2>Logo Was Here</h2>
      <input type="text" placeholder="Search..." />
      <button className={styles.cartBtn}>
        <FontAwesomeIcon icon={faCartShopping} />
        {`(${item.length})`}
      </button>
    </div>
  );
};

export default NavigationBar;
