import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const categories = [
  "all",
  "beginner",
  "competition",
  "kids",
  "recovery",
  "apparel",
];

function Shop() {
  const [selected, setSelected] = useState("all");

  const uniqueBrands = [...new Set(products.map((p) => p.brand))];
  const uniqueSports = [...new Set(products.map((p) => p.sport))];

  const [brandFilter, setBrandFilter] = useState("all");
  const [sportFilter, setSportFilter] = useState("all");

  const filtered = products.filter((p) => {
    const catMatch =
      selected === "all" ||
      (Array.isArray(p.category)
        ? p.category.includes(selected)
        : p.category === selected);

    const brandMatch = brandFilter === "all" || p.brand === brandFilter;
    const sportMatch = sportFilter === "all" || p.sport === sportFilter;

    return catMatch && brandMatch && sportMatch;
  });

  return (
    <section className="container">
      <section className="shop">
        <h2>Our Kits & Picks</h2>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selected === cat ? "active" : ""}
              onClick={() => setSelected(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="filter-selects">
          <select
            onChange={(e) => setBrandFilter(e.target.value)}
            value={brandFilter}
          >
            <option value="all">All Brands</option>
            {uniqueBrands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSportFilter(e.target.value)}
            value={sportFilter}
          >
            <option value="all">All Sports</option>
            {uniqueSports.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </section>
    </section>
  );
}

export default Shop;
