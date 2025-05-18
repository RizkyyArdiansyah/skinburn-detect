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
    <section id="home" className="scroll pt-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6 select-none">
        <div className="bg-white min-h-screen">
          <div className="flex flex-col md:flex-row items-center justify-around gap-4 h-full py-8 md:py-20">
            {/* Kiri: Teks */}
            <div data-aos="zoom-in" data-aos-duration="1000" className="md:w-1/2">
              <h1 className="text-2xl md:text-4xl text-center md:text-start font-extrabold text-slate-950 mb-4">
                Periksa<span className="text-blue-700 ml-1">Luka Bakar!</span>
              </h1>
              <p className="text-slate-900 text-sm md:text-lg leading-relaxed text-justify">
                <strong>BurnAnalyze</strong> adalah aplikasi web untuk mendeteksi derajat luka bakar dari gambar luka yang diunggah.
                Aplikasi ini menggunakan model <strong>YOLOv11</strong> yang telah dilatih untuk memberikan hasil deteksi secara cepat dan akurat.
              </p>
              <button
                onClick={() => scrollToSection("diagnose")}
                className="bg-blue-500 px-4 py-2 mt-4 md:ml-0 mx-auto flex rounded-md text-slate-50 font-semibold hover:bg-slate-100 hover:text-black transition duration-200 cursor-pointer"
              >
                Periksa!
              </button>
            </div>

            {/* Kanan: Gambar */}
            <div data-aos="fade-left" data-aos-duration="1000" className="items-start md:w-1/2">
              <img
                src={dokterImage}
                alt="Dokter Luka Bakar"
                className="w-[32em] h-auto drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
