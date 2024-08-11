import styles from "./slider.module.css";
import jewelS from "../../assets/jewelS.jpg";
import electronicsS from "../../assets/electronicsS.jpg";
import menClothingS from "../../assets/menClothingS.jpg";
import womenClothingS from "../../assets/womenClothingS.jpg";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const imgContent = [
    { img: menClothingS, alt: "men clothing" },
    { img: womenClothingS, alt: "womens clothing" },
    { img: jewelS, alt: "jewellery" },
    { img: electronicsS, alt: "electronics" },
  ];

  function next() {
    slide < imgContent.length - 1 ? setSlide(slide + 1) : setSlide(0);
  }

  function prev() {
    slide > 0 ? setSlide(slide - 1) : setSlide(imgContent.length - 1);
  }
  return (
    <div className={styles.slider}>
      <button className={`${styles.arrowBtn} ${styles.left}`} onClick={prev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {imgContent.map((item, id) => (
        <div key={id}>
          <img
            src={item.img}
            alt={item.alt}
            className={slide === id ? styles.sliderImg : styles.none}
          />
          <button
            className={slide === id ? styles.sliderBtn : styles.none}
            onClick={() => {
              item.alt.includes("men") && navigate("clothing/men");

              item.alt.includes("women") && navigate("clothing/women");

              //item.alt.includes("jewellery") && <Navigate to={`/clothing/men`} />;
              //item.alt.includes("electronic") && <Navigate to={`/clothing/men`} />;
            }}
          >
            {item.alt}
          </button>
        </div>
      ))}
      <button onClick={next} className={`${styles.arrowBtn} ${styles.right}`}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Slider;
