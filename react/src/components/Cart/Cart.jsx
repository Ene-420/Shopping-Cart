import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ item }) => {
  
  const [itemsInCart, setItemsInCart] = useState(null)

  useEffect(() => {
    console.log(item)
    const cartItems = item.map((it) =>{ return it.title});
    countOfItemsInArray(cartItems);

  },[])
  

  
  function countOfItemsInArray(array) {
    console.log({ array })
    const frequencyMap = {};
    array.forEach((item) => {
      frequencyMap[item]
        ? frequencyMap[item].count++
        : (frequencyMap[item] = { state: true, count: 1 });
    });
    console.log({ frequencyMap })
    setItemsInCart(frequencyMap)
    //return frequencyMap;
  }

  function findItem(itemTitle) {
    
    const foundItem = item.filter(it => it.title.includes(itemTitle))
    //const itemFamily = Object.entries(itemsInCart).filter(([key, value]) => key.includes(itemTitle))[0]
    console.log( foundItem[0] )
    return foundItem[0];
  }
  return (
    <>
      {itemsInCart ?
        <>
          {Object.entries(itemsInCart).forEach(([key, value], i) => {
            // const element = item.filter(item => item.title.includes(key))
            const foundCartItem = findItem(key)

            if(foundCartItem) return <CartItem item={foundCartItem} count={value.count} index={i} />
            //   <CartItem item = { ()=>{ return findItem(key)} } count = { value.count } index = {i} />
          })}
        </> : <h1>Loading...</h1>
      } 
    </>
  );
};

export default Cart;
