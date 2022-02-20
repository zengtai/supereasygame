import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, items, isOpen }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-cyan-700 to-cyan-800 text-sm text-white/80">
      <Navbar items={items} isOpen={isOpen} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
