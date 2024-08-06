import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./card.module.css";

const Card = ({index, content, onClick, addToCartClick }) => {
  return (
    <button className={styles.card} onClick={()=>{}}>
      <img src={content.image} alt={content.title} className={styles.cardImg} />
      <h3>{content.title}</h3>
      <div>
        <span>{`$${content.price}`}</span>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <button onClick={() => {
        addToCartClick(index)
      }}>Add to Cart+</button>
    </button>
  );
};

export default Card;
