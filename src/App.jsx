import './App.css'
import React, { useEffect } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import Home from "./pages/Home";
import Detect from "./pages/Detect";
import Educate from "./pages/Educate"


function App() {
  useEffect(() => {
    // Inisialisasi AOS secara global
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false,    // Memastikan animasi berjalan setiap kali elemen masuk viewport
    });

    // Untuk membersihkan AOS ketika komponen unmount
    return () => {
      AOS.refresh(); // Membuat ulang animasi saat komponen unmount
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Educate />
        <Detect />
        <Footer />
      </main>
    </>
  );
}

export default App;