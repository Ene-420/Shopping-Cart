import { Link, useLocation } from "react-router-dom";
import Card from "../Card/card";
import styles from "./clothes.module.css";
const Clothes = ({ cart }) => {
  let { state } = useLocation();
  const { gender, menClothing, womenClothing } = state;
  //console.log({state})
  function addClothToCart(index) {
    if (gender.includes("men")) {
      const item = menClothing.filter((_, i) => index === i);
      cart(item[0]);
    } else {
      const item = womenClothing.filter((_, i) => index === i);
      cart(item[0]);
    }
  }
  return (
    <>
      <Link to="/">{"< "}Back </Link>

      {gender === "men" ? (
        <>
          <h3>{"Men's Clothing"}</h3>
          <div className={styles.rows}>
            {menClothing.map((item, index) => (
              <Card
                key={index}
                index={index}
                content={item}
                addToCartClick={addClothToCart}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h3>{"Women's Clothing"}</h3>
          <div className={styles.rows}>
            {womenClothing.map((item, index) => (
              <Card
                key={index}
                index={index}
                content={item}
                addToCartClick={addClothToCart}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Clothes;
