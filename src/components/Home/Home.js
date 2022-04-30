import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/Product";
import { addToCart } from "../../redux/_cart";
import { Link } from "react-router-dom";
import { HiHome, HiShoppingCart } from "react-icons/hi";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);
  const carts = useSelector((state) => state.cartReducer);

  const handleAddToCart = (id) => {
    const addAction = addToCart(products[id]);
    dispatch(addAction);
  };

  console.log(products);
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <HiHome />
        </Link>
        <Link to="/cart">
          <HiShoppingCart />
        </Link>
        {carts.length !== 0 ? (
          <span className="lenghtCart">{carts.length}</span>
        ) : (
          <></>
        )}
      </div>

      <div className="page">
        <h1>HOME</h1>
        <div className="productList">
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                data={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
