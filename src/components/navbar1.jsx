import React from "react";

import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="py-4 border-box md:px-25 px-5 flex items-center justify-between w-full bg-white shadow-md">
      {/* LEFT SIDE - Logo */}
      <Link to="/" className="flex items-center gap-2">
        {/* LinkedIn Icon */}
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">in</span>
        </div>

        {/* Text Logo */}
        <div className="flex gap-0">
          <h3 className="text-blue-800 font-bold text-3xl">Linked</h3>
          <h3 className="text-blue-600 font-bold text-3xl">In</h3>
        </div>
      </Link>

      {/* RIGHT SIDE - Buttons */}
      <Link to="/signup" className="text-blue-800 flex gap-4">
        <button className="border-blue-800 border-2 rounded-full px-4 py-1 hover:bg-blue-50 transition-colors">
          join now
        </button>
        <Link to="/login">
          <button className="border-blue-800 border-2 rounded-full px-4 py-1 hover:bg-blue-50 transition-colors">
            login
          </button>
        </Link>
      </Link>
    </nav>
  );
};
export default Navbar1;
