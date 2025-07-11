import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <h1>CombatGearCo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/shop">Shop Kits</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
