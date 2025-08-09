import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} GIRI N S — Built with React + TypeScript
      </div>
    </footer>
  );
};

export default Footer;
