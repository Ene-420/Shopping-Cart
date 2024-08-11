import { useEffect, useState } from "react";

const useProductList = () => {
  
  const [menClothing, setMenClothing] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [jewellry, setJewellry] = useState([]);
  const [womenClothing, setWomenCLothing] = useState([]);


    useEffect( () => {
      // await getProductList()
       const getProductList = async () => {
         //const []
         const jeweleryItems = [],
           mensClothingItems = [],
           electronicsItems = [],
           womenClothingItem = [];

         try {
           await fetch("https://fakestoreapi.com/products")
             .then((res) => res.json())
             .then((json) => {
               json.map((item) => {
                 switch (item.category) {
                   case "men's clothing":
                     mensClothingItems.push(item);
                     break;
                   case "women's clothing":
                     womenClothingItem.push(item);
                     break;
                   case "electronics":
                     electronicsItems.push(item);
                     break;
                   case "jewelery":
                     jeweleryItems.push(item);
                     break;
                   default:
                     break;
                 }
               });
             });

           setElectronics(electronicsItems);
           setJewellry(jeweleryItems);
           setMenClothing(mensClothingItems);
           setWomenCLothing(womenClothingItem);
         } catch (error) {
           console.error("Product not found");
         }
       };
      
      getProductList()
    },[])

 
    
    return{jewellry, electronics, menClothing, womenClothing }
};


export default useProductList