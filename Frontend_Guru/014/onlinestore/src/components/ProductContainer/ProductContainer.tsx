import { useEffect, useState, useMemo, ChangeEvent } from "react";
import ProductList from "../ProductList/ProductList";
import * as S from "./ProductContainer.styled";
import { Product } from "../../store/shopping-cart-context";

function ProductContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("none");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category)),
        );
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const displayedProducts = useMemo(() => {
    const result = filteredProducts.slice();
    if (sortOrder === "asc") {
      result.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
    } else if (sortOrder === "desc") {
      result.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
    }
    return result;
  }, [filteredProducts, sortOrder]);

  return (
    <div>
      <S.FilterWrapper>
        <S.Select value={category} onChange={handleCategoryChange}>
          <option value="all">All categories</option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </S.Select>

        <S.Select value={sortOrder} onChange={handleSortChange}>
          <option value="none">Sort: default</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </S.Select>
      </S.FilterWrapper>

      <ProductList products={displayedProducts} />
    </div>
  );
}

export default ProductContainer;
