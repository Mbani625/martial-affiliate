import React, { useState } from "react";
import posts from "./posts.json";
import products from "../data/products.json";
import { Link } from "react-router-dom";
import "../styles/blog.css";

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(posts.map((p) => p.category))];
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <section className="container">
      <section className="blog-list">
        <h2>Product Reviews & Buying Guides</h2>

        <div className="blog-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredPosts.map((post) => {
          const product = products.find((p) => p.id === post.productId);

          return (
            <div key={post.id} className="blog-preview with-image">
              <div className="blog-text">
                <h3>{post.title}</h3>
                <p>
                  <em>{post.date}</em>
                </p>
                <p>{post.intro}</p>
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </div>
              {product?.image && (
                <a href={product.link} target="_blank" rel="noreferrer">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="blog-thumb"
                  />
                </a>
              )}
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default BlogList;
