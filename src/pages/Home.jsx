import React from "react";
import { Link } from "react-router-dom";
import posts from "../blog/posts.json";
import products from "../data/products.json";
import "../styles/home.css";

function Home() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const newestPost = sortedPosts[0];
  const mostPopular = [...posts].sort(
    (a, b) => b.intro.length - a.intro.length
  )[0];

  const mostPopularProduct = products.find(
    (p) => p.id === mostPopular.productId
  );
  const newestPostProduct = products.find((p) => p.id === newestPost.productId);

  const topRatedByCategory = {};
  const featuredProducts = [];

  for (let product of products) {
    if (!topRatedByCategory[product.category]) {
      topRatedByCategory[product.category] = product;
      featuredProducts.push(product);
    }
  }

  return (
    <section className="container">
      <section className="home">
        <h2>Welcome to Martial Market</h2>
        <p>Your trusted source for curated martial arts gear and guides.</p>

        <div className="blog-feature with-image">
          <div className="blog-text">
            <h3>🔥 Most Popular Blog Post</h3>
            <h4>{mostPopular.title}</h4>
            <p>{mostPopular.intro}</p>
            <Link to={`/blog/${mostPopular.id}`} className="cta">
              Read More
            </Link>
          </div>
          {mostPopularProduct?.image && (
            <a href={mostPopularProduct.link} target="_blank" rel="noreferrer">
              <img
                src={mostPopularProduct.image}
                alt={mostPopular.title}
                className="blog-thumb"
              />
            </a>
          )}
        </div>

        <div className="blog-feature with-image secondary">
          <div className="blog-text">
            <h3>🆕 Newest Blog Post</h3>
            <h4>{newestPost.title}</h4>
            <p>{newestPost.intro}</p>
            <Link to={`/blog/${newestPost.id}`} className="cta">
              Read More
            </Link>
          </div>
          {newestPostProduct?.image && (
            <a href={newestPostProduct.link} target="_blank" rel="noreferrer">
              <img
                src={newestPostProduct.image}
                alt={newestPost.title}
                className="blog-thumb"
              />
            </a>
          )}
        </div>

        <div className="product-highlight">
          <h3>⭐ Top Products by Category</h3>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>
                  <strong>{product.brand}</strong> – {product.sport}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cta"
                >
                  View Product
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
