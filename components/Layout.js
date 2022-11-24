import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, navItems, isOpen }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-cyan-500 to-cyan-600 text-sm text-white/80">
      <Navbar items={navItems} isOpen={isOpen} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
