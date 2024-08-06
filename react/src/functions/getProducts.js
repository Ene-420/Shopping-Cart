import { useState } from "react";

const productList = () => {
    const [category, setCategory] = useState([])
    const [menCLothing, setMenClothing] = useState(null)
    const [electronics, setElectronics] = useState(null)
    const [jewellry, setJewellry] = useState(null)
    const [womenClothing, setWomenCLothing] = useState(null)




    const getProductCategory = async () => {
      try {
        await fetch("https://fakestoreapi.com/products/categories")
          .then((res) => res.json())
          .then((json) => {
            setCategory(json);
          });
      } catch (error) {
        console.error("Error Fetching details");
      }
    };



    const getProductList = async () => {
        //const []

        try {
            await fetch().then(res => res.json()).then(json => setElectronics(json))
        } catch (error) {
            console.error('Product not found')
        }
    }

}

