import { useState, useEffect } from "react";
import Logo from "/burnLogo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Add event listener to close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-cream-50/70 shadow-md select-none">
      <div className="container md:max-w-[1200px] px-4 md:px-2 mx-auto py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={Logo}
              alt="Logo BurnAnalyze"
              className="size-7 mr-2"
            />
            <a href="#home" onClick={(e) => e.preventDefault()} className="text-2xl font-bold text-brown">
              <span className="text-black">Burn</span>Alyze
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex flex-row bg-slate-50 shadow-sm gap-x-6 px-5 py-2 rounded-full">
              <button onClick={() => scrollToSection("home")} className="text-black cursor-pointer font-medium text-sm hover:text-brown">Home</button>
              <button onClick={() => scrollToSection("edukasi")} className="text-sm text-black cursor-pointer font-medium hover:text-brown">Edukasi</button>
              <button onClick={() => scrollToSection("diagnose")} className="text-black cursor-pointer font-medium text-sm hover:text-brown">Deteksi</button>
              <button onClick={() => scrollToSection("profile")} className="text-black cursor-pointer font-medium text-sm hover:text-brown">Profile</button>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {!menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-950"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-950"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-5 py-5 flex flex-col text-center items-center font-medium">
            <button onClick={() => scrollToSection("home")} className="text-black cursor-pointer font-medium text-sm hover:text-brown">Home</button>
            <button onClick={() => scrollToSection("edukasi")} className="text-sm text-black cursor-pointer font-medium hover:text-brown">Edukasi</button>
            <button onClick={() => scrollToSection("diagnose")} className="text-black cursor-pointer font-medium text-sm hover:text-brown">Deteksi</button>
            <button onClick={() => scrollToSection("profile")} className="text-black cursor-pointer font-medium text-sm hover:text-brown">Profile</button>
          </div>
        )}
      </div>
    </nav>
  );
}