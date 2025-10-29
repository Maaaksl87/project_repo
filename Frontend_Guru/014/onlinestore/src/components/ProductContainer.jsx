import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { styled } from "styled-components";

const FilterWrapper = styled.div`
  margin-bottom: 20px;
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

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // Визначаємо унікальні категорії
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
        );
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

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
      </FilterWrapper>
      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default ProductContainer;
