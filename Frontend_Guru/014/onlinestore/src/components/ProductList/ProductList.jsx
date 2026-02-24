import ProductCard from "../ProductCard/ProductCard";
import * as S from "./ProductList.styled";

function ProductList({ products }) {
  return (
    <S.ProductListGrid className="product-list">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </S.ProductListGrid>
  );
}

export default ProductList;
