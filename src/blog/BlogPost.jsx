import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "./posts.json";
import products from "../data/products.json";
import "../styles/blog.css";

function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const product = products.find((p) => p.id === post?.productId);

  if (!post) return <p>Post not found.</p>;

  return (
    <section className="container">
      <section className="blog-post">
        <h2>{post.title}</h2>
        <p>
          <em>{post.date}</em>
        </p>
        <p>{post.content}</p>

        {product && (
          <div className="related-product">
            <h3>Product Reviewed:</h3>
            <p>
              <strong>{product.title}</strong>
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
        )}

        <Link to="/blog">← Back to all posts</Link>
      </section>
    </section>
  );
}

export default BlogPost;
