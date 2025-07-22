import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

function Footer() {
  return (
    <footer className="site-footer text-center py-6 bg-gray-900 text-white">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} CombatGearCo. Affiliate links may apply.
      </p>
      <div className="flex justify-center space-x-4 text-sm">
        <Link to="/privacy-policy" className="hover:underline text-gray-300">
          Privacy Policy
        </Link>
        <span> | </span>
        <Link to="/affiliate-disclosure" className="hover:underline text-gray-300">
          Affiliate Disclosure
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
