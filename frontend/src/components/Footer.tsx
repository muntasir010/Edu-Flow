import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">EduFlow</h2>
            <p className="text-sm opacity-80 leading-relaxed">
              EduFlow is a modern learning platform designed to help students
              and professionals grow their skills with structured courses and
              real-world projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:underline">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/help" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>Email: naeemtasir03@gmail.com</li>
              <li>Phone: +880 1302-037958</li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-muted transition"
              >
                🌐
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-muted transition"
              >
                📘
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-muted transition"
              >
                🐦
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-muted" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <p>© {new Date().getFullYear()} EduFlow. All rights reserved.</p>
          <p>Built with ❤️ using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
