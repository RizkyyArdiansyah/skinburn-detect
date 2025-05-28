import './App.css'
import React, { useEffect, useState } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import Home from "./pages/Home";
import Detect from "./pages/Detect";
import Educate from "./pages/Educate"
import LoadingScreen from "./components/Loading";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900); 

    return () => clearTimeout(timer);
  }, []);

  // Inisialisasi AOS saat komponen mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   
    });
  }, []);

  // Re-initialize AOS setelah loading selesai (khusus untuk mobile)
  useEffect(() => {
    if (!loading) {
      // Delay untuk memastikan DOM sudah ter-render sempurna
      const initTimer = setTimeout(() => {
        AOS.refresh();
        
        // Force refresh untuk mobile
        if (window.innerWidth <= 768) {
          setTimeout(() => {
            AOS.refreshHard();
          }, 100);
        }
      }, 100);

      return () => clearTimeout(initTimer);
    }
  }, [loading]);

  // Handle resize dan orientation change untuk mobile
  useEffect(() => {
    const handleResize = () => {
      if (!loading) {
        setTimeout(() => {
          AOS.refresh();
        }, 150);
      }
    };

    const handleOrientationChange = () => {
      if (!loading) {
        setTimeout(() => {
          AOS.refreshHard();
        }, 300);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <main>
            <Home />
            <Educate />
            <Detect />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;