import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar on mobile
  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Hamburger Menu (It is visible only on small screens) */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* Icon for Hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Component */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Contact App</h2>
          {/* Navigation Links */}
          <ul className="mt-8 space-y-4">
            <li>
              <Link
                to="/"
                className="block hover:bg-gray-700 p-2 rounded"
                onClick={closeSidebar}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/charts"
                className="block hover:bg-gray-700 p-2 rounded"
                onClick={closeSidebar}
              >
                Charts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
