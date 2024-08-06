import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/card";
import styles from "./homePage.module.css";
//import Card from "./card";

export default function HomePage({ content }) {
  const { jewellry, electronics, menClothing, womenClothing } = content();
  const [gender, setGender] = useState("men");

  const fourMensClothing = [...menClothing];
  const copyWomenClothing = [...womenClothing];
  // useEffect(() => {
  //   const activeElement = document.querySelector(".active");
  // }, [gender]);

  function swapGender(event) {
    const { textContent } = event.target;
    console.log(textContent);
    if (textContent.includes("Men")) setGender("men");
    else setGender("female");
  }
  return (
    <>
      <button onClick={swapGender}>Men</button>

      <button onClick={swapGender}>Women</button>

      <div>
        {gender.includes("men") ? (
          <>
            <h3> {"Men's Clothing"}</h3>
            <div className={styles.rows}>
              {fourMensClothing.slice(0, 4).map((item, index) => (
                <Card key={index} content={item} />
              ))}
              <Link
                to="clothing"
                state={{
                  gender: gender,
                  menClothing: menClothing,
                  womenClothing: womenClothing,
                }}
              >
                View More
              </Link>
            </div>
          </>
        ) : (
          <>
            <h3>{"Women's Clothing"}</h3>
            <div className={styles.rows}>
              {copyWomenClothing.slice(0, 4).map((item, index) => (
                <Card key={index} content={item} />
              ))}
              <Link
                to="clothing"
                state={{
                  gender: gender,
                  menClothing: menClothing,
                  womenClothing: womenClothing,
                }}
              >
                View More
              </Link>
            </div>
          </>
        )}
        <div></div>
      </div>
      <div>
        <h3>Jewelery</h3>
        <div className={styles.rows}>
          {jewellry.map((item, index) => (
            <Card key={index} content={item} />
          ))}
          <Link>View More</Link>
        </div>
      </div>
    </>
  );
}
