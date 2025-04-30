// src/layout/Layout.tsx
import { Navbar } from "@/components/navbar";  // Import Navbar from components
import { Footer } from "@/components/footer";  // Import Footer from components
import { Outlet } from "react-router-dom";  // React Router Outlet to render child routes

const Layout = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />  {/* Global Navbar */}
      
      <main className="min-h-[80vh]">
        <Outlet />  {/* Renders the page-specific content based on route */}
      </main>
      
      <Footer />  {/* Optional global Footer */}
    </div>
  );
};

export default Layout;
