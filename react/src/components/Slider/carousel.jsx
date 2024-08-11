import styles from "./slider.module.css";

const Carousel = () => {
  return (
    <div className={styles.logos}>
      <div className={styles.logosSlide}>
        <span>50% off Men's Clothing</span>

        <span>40% off Women's Clothing</span>

        <span>30% off Electronics</span>

        <span>20% off Jewelery</span>
      </div>
    </div>
  );
};

export default Carousel;
