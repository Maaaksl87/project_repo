import ProductCard from "../ProductCard/ProductCard";
import * as S from "./ProductList.styled";
import { Product } from "../../store/shopping-cart-context";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <S.ProductListGrid className="product-list">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </S.ProductListGrid>
  );
}

export default ProductList;
