import { faCross, faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./cartItem.module.css"

const CartItem = ({ name, callback, count, index, operation }) => {
  const item = callback(name)
  console.log({ item })
  
  const {addToQuantity, removeFromQuantity, removeItemFromCart,} = operation()
    //console.log({item})
  return (
    // <Link key={index}>

    <button className={styles.cartItem}>
      <div>
        <img src={item.image} alt="" className={styles.cartItemImg} />
      </div>
      <div className={styles.cartItemRows}>
        <div>
          <h2>{item.title}</h2>
          {/* <h3>{item.description}</h3> */}
          <h4>{item.rating.count - count}</h4>
          <h4>{item.rating.rate}</h4>
        </div>
        <div className={styles.cartItemQuantity}>
          <button onClick={() => addToQuantity(name)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <input type="number" value={count} min={1} />
          <button onClick={() => {
            if (count > 1) removeFromQuantity(name)
            else removeItemFromCart(name)
          }}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div>
          <h2>{`$${item.price}`}</h2>
        </div>
      </div>
      <div className={styles.cartItemCloseBtnDiv}>
        <button onClick={() => removeItemFromCart(name)}>
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </button>
    //</Link>
  );
};


export default CartItem