import { useEffect, useState } from "react";
import { HiHome, HiShoppingCart } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeToCart,
} from "../../redux/_cart";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartReducer);

  const handleRemoveToCart = (id) => {
    const removeAction = removeToCart(id);
    dispatch(removeAction);
  };

  const handleIncreaseQuantity = (id) => {
    const increaseQuantityAction = increaseQuantity(id);
    dispatch(increaseQuantityAction);
  };

  const handleDecreaseQuantity = (id) => {
    const decreaseQuantityAction = decreaseQuantity(id);
    dispatch(decreaseQuantityAction);
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += carts[i].product.price * carts[i].quantity;
    }

    setTotal(sum);
  }, [carts]);

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
                <th>Quantity</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
              {carts.map((cart, index) => {
                return (
                  <tr key={index}>
                    <td style={{ maxWidth: "10px" }}>{index + 1}</td>
                    <td>{cart.product.name}</td>
                    <td>
                      <img
                        className="imgInCart"
                        src={cart.product.img}
                        alt="img"
                      />
                    </td>
                    <td>
                      <div className="quantity">
                        <button
                          className="btnQuantity"
                          onClick={() => {
                            handleDecreaseQuantity(cart.product.id);
                          }}
                        >
                          -
                        </button>

                        {cart.quantity}

                        <button
                          className="btnQuantity"
                          onClick={() => {
                            handleIncreaseQuantity(cart.product.id);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="priceInCart">
                      $ {cart.product.price.toLocaleString()}
                    </td>
                    <td>
                      <MdDelete
                        className="btnRemove"
                        onClick={() => {
                          handleRemoveToCart(cart.product.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>

            <div>
              <p className="total">Total: ${total.toLocaleString()}</p>
            </div>
          </div>
        ) : (
          <h3>Cart is empty</h3>
        )}
      </div>
    </div>
  );
}
