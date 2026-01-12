import {
  FaLinkedin,
  FaSearch, // ✅ Search
  FaHome, // ✅ Home
  FaUsers, // ✅ My Network
  FaBriefcase, // ✅ Jobs
  FaComments, // ✅ Messaging
  FaBell,
  FaUser,
} from "react-icons/fa";

const Navbar2 = () => {
  return (
    <nav className="flex justify-between items-center p-3 md:p-5 w-full bg-white shadow-sm">
      {/* Left Side - Logo and Search */}
      <div className="flex gap-2 md:gap-5 items-center flex-1">
        <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-blue-700 text-white text-xl md:text-2xl rounded-l-sm">
          <FaLinkedin />
        </div>
        <div className="relative hidden sm:flex items-center">
          <FaSearch className="absolute left-3 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 border-none rounded-md pl-10 pr-4 py-2 w-40 sm:w-60 lg:w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Right Side - Navigation Icons */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Home Icon */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaHome className="text-lg md:text-xl text-gray-600 group-hover:text-black transition-colors duration-200" />
          <span className="hidden md:block text-xs text-gray-600 group-hover:text-black mt-1">
            Home
          </span>
        </div>

        {/* My Network Icon */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaUsers className="text-lg md:text-xl text-gray-600 group-hover:text-black transition-colors duration-200" />
          <span className="hidden md:block text-xs text-gray-600 group-hover:text-black mt-1">
            Network
          </span>
        </div>

        {/* Jobs Icon */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaBriefcase className="text-lg md:text-xl text-gray-600 group-hover:text-black transition-colors duration-200" />
          <span className="hidden md:block text-xs text-gray-600 group-hover:text-black mt-1">
            Jobs
          </span>
        </div>

        {/* Messaging Icon */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaComments className="text-lg md:text-xl text-gray-600 group-hover:text-black transition-colors duration-200" />
          <span className="hidden md:block text-xs text-gray-600 group-hover:text-black mt-1">
            Messaging
          </span>
        </div>

        {/* Notifications Icon */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaBell className="text-lg md:text-xl text-gray-600 group-hover:text-black transition-colors duration-200" />
          <span className="hidden md:block text-xs text-gray-600 group-hover:text-black mt-1">
            Notifications
          </span>
        </div>

        {/* Profile Icon */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaUser className="text-lg md:text-xl text-gray-600 group-hover:text-black transition-colors duration-200" />
          <span className="hidden md:block text-xs text-gray-600 group-hover:text-black mt-1">
            Me
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
