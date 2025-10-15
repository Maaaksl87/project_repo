import { styled } from "styled-components";
import Button from "./Button";

const StyledWrapperImg = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;

  img {
    border-radius: 10px;
  }
`;

function ImgWrapper({ image, category, product, addToCart, cartItems, updateQuantity }) {
  const cartItem = cartItems.find((item) => item._id === product._id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  return (
    <StyledWrapperImg>
      <img src={image} alt={category || "Product image"} />
      <Button
        product={product}
        addToCart={addToCart}
        isInCart={isInCart}
        quantity={quantity}
        updateQuantity={updateQuantity}
      >
        Add to Cart
      </Button>
    </StyledWrapperImg>
  );
}

export default ImgWrapper;
