import React from "react";
import dokterImage from "../assets/images/logoLuka.jpg";

export default function Home() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="scroll pt-24 min-h-[100dvh] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-200"></div>

        {/* Floating Circles */}
        <div className="absolute w-72 h-72 bg-cream-50/50 rounded-full -top-36 -left-36 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cream-50/50 rounded-full -top-36 -right-36 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cream-50/50 rounded-full -bottom-18 -left-36 animate-pulse"></div>

        {/* Moving Geometric Shapes */}
        <div className="absolute inset-0">
          <svg
            className="absolute w-20 h-16 text-red-500/50 top-[8%] md:top-[18%] left-[40%] animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <svg
            className="absolute w-20 h-16 text-red-500/50 bottom-[15%] md:bottom-[25%] left-[40%] md:left-[30%] animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px),
              linear-gradient(180deg, #000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 select-none relative">
        <div className="bg-transparent min-h-screen rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-around gap-4 h-full py-8 md:py-20 md:ml-3">
            {/* Kiri: Teks */}
            <div data-aos="zoom-in" data-aos-duration="1000" className="md:w-1/2">
              <h1 className="text-2xl md:text-4xl text-center md:text-start font-extrabold text-slate-950 mb-4">
                Periksa<span className="text-brown-100 ml-1">Luka Bakar!</span>
              </h1>
              <p className="text-slate-900 text-sm md:text-lg leading-relaxed text-justify">
                <strong>BurnAlyze</strong> adalah aplikasi web untuk mendeteksi derajat luka bakar dari gambar luka yang diunggah.
                Aplikasi ini menggunakan model <strong>YOLOv11</strong> yang telah dilatih untuk memberikan hasil deteksi secara cepat dan akurat.
              </p>
              <button
                onClick={() => scrollToSection("diagnose")}
                className="bg-brown-100 px-4 py-2 mt-4 md:ml-0 mx-auto flex rounded-md text-slate-50 font-semibold hover:bg-slate-100 hover:outline-2 hover:outline-brown-100 hover:text-black transition duration-400 cursor-pointer transform hover:scale-105"
              >
                Periksa!
              </button>
            </div>

            {/* Kanan: Gambar */}
            <div data-aos="fade-left" data-aos-duration="1000" className="items-start md:w-1/2">
              <img
                src={dokterImage}
                alt="Dokter Luka Bakar"
                className="w-[32em] md:ml-4 h-auto drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}