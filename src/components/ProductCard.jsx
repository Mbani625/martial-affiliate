import React from "react";

function handleProductClick(productId) {
  const clicks = JSON.parse(localStorage.getItem("productClicks")) || {};
  clicks[productId] = (clicks[productId] || 0) + 1;
  localStorage.setItem("productClicks", JSON.stringify(clicks));
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Sport:</strong> {product.sport}
      </p>
      <p>{product.desc}</p>
      <a
        href={product.link}
        target="_blank"
        rel="noreferrer"
        onClick={() => handleProductClick(product.id)}
      >
        View Product
      </a>
    </div>
  );
}

export default ProductCard;
