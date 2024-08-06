import { Link, useLocation } from "react-router-dom";
import Card from "../Card/card";
const Clothes = ({cart}) => {
    let { state } = useLocation();
    const {gender, menClothing, womenClothing } = state
    //console.log({state})
    function addClothToCart(index) {
        if (gender.includes("men")) {
            const item = menClothing.filter((_, i) => index === i)
            cart(item)
        }
        else {
            const item = womenClothing.filter((_, i) => index === i);
            cart(item);
        }
    }
  return (
    <>
      <Link to="/">{"< "}Back </Link>
      {gender === "men" ? (
        <>
          <h3>{"Men's Clothing"}</h3>
          <div>
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
          <div>
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
