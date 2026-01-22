import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="p-4">
        <div className="p-10 m-20 text-5xl border-amber-600">
          hi
        </div>
        <Outlet />
      </main>
      <footer className=" text-white p-4 mt-10">
        Public Footer
      </footer>
    </div>
  );
};

export default PublicLayout;
