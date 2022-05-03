import { Card, Button } from "antd";

function Product(props) {
  const clickBtnAdd = (id) => {
    props.handleAddToCart(id);
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
        }}
      >
        Add to cart
      </Button>
    </Card>
  );
}

export default Product;
