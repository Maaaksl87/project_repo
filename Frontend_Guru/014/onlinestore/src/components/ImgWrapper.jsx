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

function ImgWrapper({ image, category }) {
  return (
    <StyledWrapperImg>
      <img src={image} alt={category || "Product image"} />
      <Button>Add to Cart</Button>
    </StyledWrapperImg>
  );
}

export default ImgWrapper;
