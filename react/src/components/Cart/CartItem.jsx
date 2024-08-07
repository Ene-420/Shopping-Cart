import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CartItem = ({ item, count, index }) => {
    console.log({item})
  return (
    <Link key={index}>
      <button>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <div>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <h4>{item.rating.count - count}</h4>
            <h4>{item.rating.rate}</h4>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <input type="text" value={count} />
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div>
            <h2>{item.price}</h2>
          </div>
        </div>
      </button>
    </Link>
  );
};


export default CartItem