import React, { useEffect, useState, useMemo } from "react";
import ProductList from "./ProductList";
import { styled } from "styled-components";

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Select = styled.select`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

function ProductContainer({ addToCart, cartItems, updateQuantity }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("none"); //буде 3 стани

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
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
    const result = filteredProducts.slice(); // копія
    if (sortOrder === "asc") {
      result.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
    } else if (sortOrder === "desc") {
      result.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
    }
    return result;
  }, [filteredProducts, sortOrder]);

  return (
    <div>
      <FilterWrapper>
        <Select value={category} onChange={handleCategoryChange}>
          <option value="all">All categories</option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </Select>

        <Select value={sortOrder} onChange={handleSortChange}>
          <option value="none">Sort: default</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </Select>
      </FilterWrapper>

      <ProductList
        products={displayedProducts}
        addToCart={addToCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default ProductContainer;
