import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>
        <h3>T-Shirt</h3>
        <div>
          <Link to="clothing">View More</Link>
        </div>
      </div>
      <div>
        <h3>Accessories</h3>
        <div>
          <Link>View More</Link>
        </div>
      </div>
    </>
  );
}
