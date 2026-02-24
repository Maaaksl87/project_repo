import { useEffect, useState, useMemo } from "react";
import ProductList from "../ProductList/ProductList";
import * as S from "./ProductContainer.styled";

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category)),
        );
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
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
