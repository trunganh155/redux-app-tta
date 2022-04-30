import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiHome, HiShoppingCart } from "react-icons/hi";

export default function Cart() {
  const carts = useSelector((state) => state.cartReducer);

  return (
    <div className="cart">
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
        <h1>CART</h1>
        <table>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
          </tr>
          {carts.map((product, index) => {
            return (
              <tr key={index}>
                <td style={{ width: 20 }}>{index + 1}</td>
                <td>{product.name}</td>
                <td>
                  <img
                    src={product.img}
                    alt="img"
                    style={{ width: "80px", height: "80px" }}
                  />
                </td>
                <td>{product.price}$</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
