import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link, useLocation } from "react-router-dom";

const Cart = ({ item, add, remove }) => {

  const [itemsInCart, setItemsInCart] = useState(null);

  useEffect(() => {
    console.log({item});
    const cartItems = item.map((it) => {
      return it.title;
    });
    countOfItemsInArray(cartItems);
  }, [item]);

  function addToQuantity(item) {
    // const updateItemsList = { ...itemsInCart };
    // updateItemsList[item].count++;

    add(findItem(item))
    //setItemsInCart(updateItemsList);
  }

  function removeFromQuantity(item) {
    // const updateItemsList = { ...itemsInCart };
    // updateItemsList[item].count > 0 && updateItemsList[item].count--
    
    remove(item);
    //setItemsInCart(updateItemsList);
  }

  function removeItemFromCart(item) {
    const updateItemsList = { ...itemsInCart };
    delete updateItemsList[item];

    setItemsInCart(updateItemsList);
    remove(item)
  }

  const operation = () => {
    return { addToQuantity, removeFromQuantity, removeItemFromCart, };
  };
  function countOfItemsInArray(array) {
    console.log({ array });
    const frequencyMap = {};
    array.forEach((item) => {
      frequencyMap[item]
        ? frequencyMap[item].count++
        : (frequencyMap[item] = { state: true, count: 1 });
    });
    console.log({ frequencyMap });
    setItemsInCart(frequencyMap);
    //return frequencyMap;
  }

  function findItem(itemTitle) {
    const foundItem = item.filter((it) => it.title.includes(itemTitle));
    //const itemFamily = Object.entries(itemsInCart).filter(([key, value]) => key.includes(itemTitle))[0]
    console.log(foundItem[0]);
    return foundItem[0];
  }
  return (
    <>
      <Link to="/"> {"< Back"}</Link>
      <h1>My Bag</h1>
      {itemsInCart ? (
        <>
          {Object.entries(itemsInCart).map(([key, value], i) => (
            <CartItem
              key={i}
              name={key}
              callback={findItem}
              count={value.count}
              index={i}
              operation={operation}
            />
          ))}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Cart;
