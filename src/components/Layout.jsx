import Sidebar from "./Sidebar/Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="w-screen flex  bg-[#FAFAFA]   ">
      <div className="min-h-screen max-h-fit sideBar w-0 md:w-56">
        <Sidebar />
      </div>
      <div className="content w-screen  ">{children}</div>
    </div>
  );
};

export default Layout;
