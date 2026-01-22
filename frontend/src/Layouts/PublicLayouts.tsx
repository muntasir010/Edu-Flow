import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default PublicLayout;
