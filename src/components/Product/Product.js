import { Button, Card, notification } from "antd";

function Product(props) {
  const clickBtnAdd = (id) => {
    props.handleAddToCart(id);
  };

  const showNotification = (productName) => {
    notification.success({
      className: "notification-custom",
      message: <span className="notification-title">Add To Cart</span>,
      description: (
        <div>
          <span className="notification-productName">{productName}</span>
          <span> has been added to cart.</span>
        </div>
      ),
      duration: 1.5,
    });
  };

  return (
    <Card
      hoverable
      style={{ width: 250 }}
      cover={
        <img
          style={{ width: 200, marginLeft: 25 }}
          alt="example"
          src={props.data.img}
        />
      }
    >
      <p style={{ fontWeight: "bold", textAlign: "left", margin: "0px" }}>
        {props.data.name}
      </p>
      <p style={{ color: "red", fontWeight: "bold", textAlign: "left" }}>
        ${props.data.price.toLocaleString()}
      </p>

      <Button
        type="primary"
        shape="round"
        onClick={() => {
          clickBtnAdd(props.data.id);
          showNotification(props.data.name);
        }}
      >
        Add to cart
      </Button>
    </Card>
  );
}

export default Product;
