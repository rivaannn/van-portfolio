import PropTypes from "prop-types";
import { ScrollToTop, AnimatedBackground } from "@/components";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

/**
 * Main Layout Component
 * Wraps all pages with consistent layout structure
 *
 * @param {ReactNode} children - Page content
 */
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatedBackground />
      <Navbar />

      <main className="grow relative z-1">
        <div className="min-h-screen relative overflow-hidden">{children}</div>

        <Footer />
      </main>

      <ScrollToTop />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
