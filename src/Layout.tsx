import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <Sidebar />
      <div className="flex-1 md:ml-64 p-4">
      {children}
      </div>
    </div>
  );
};

export default Layout;
