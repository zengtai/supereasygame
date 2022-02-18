import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, items, isOpen }) {
  return (
    <div className="flex flex-col text-sm bg-gradient-to-br from-cyan-600 to-cyan-700 text-white/80 min-h-screen">
      <Navbar items={items} isOpen={isOpen} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
