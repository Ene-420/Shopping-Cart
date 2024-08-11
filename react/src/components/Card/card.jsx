import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./card.module.css";

const Card = ({index, content, onClick, addToCartClick }) => {
  return (
    <button className={styles.card} onClick={()=>{}}>
      <img src={content.image} alt={content.title} className={styles.cardImg} />
      <h3>{content.title}</h3>
      <div className={styles.cardRow}>
        <span>{`$${content.price}`}</span>
        <button className={styles.likeBtn} onClick={(event) => {
          event.target.classList.toggle(styles.heart)
        }}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <button className={styles.addToCartBtn} onClick={() => {
        addToCartClick(index)
      }}>Add to Cart+</button>
    </button>
  );
};

export default Card;
