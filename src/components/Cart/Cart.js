import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiHome, HiShoppingCart } from "react-icons/hi";
import { Button } from "antd";
import { removeToCart } from "../../redux/_cart";

export default function Cart() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartReducer);

  const handleRemoveToCart = (id) => {
    const removeAction = removeToCart(id);
    dispatch(removeAction);
  };

  return (
    <div className="cart">
      <div className="nav">
        <Link to="/">
          <HiHome />
        </Link>
        <Link to="/cart">
          <HiShoppingCart />
        </Link>
      </div>

      <div className="page">
        <h2>CART</h2>
        {carts.length !== 0 ? (
          <div>
            <span className="lenghtCart">{carts.length}</span>

            <table>
              <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Edit</th>
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
                    <td style={{ width: 150 }}>
                      <Button
                        type="danger"
                        shape="round"
                        onClick={() => {
                          handleRemoveToCart(product.id);
                        }}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
          <h3>Cart is empty</h3>
        )}
      </div>
    </div>
  );
}
