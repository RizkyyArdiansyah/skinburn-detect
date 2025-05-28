import React, { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [dots, setDots] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animasi titik loading text
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 4 ? '' : prev + '.');
    }, 500);

    // Progress bar dengan timing yang lebih akurat
    const startTime = Date.now();
    const duration = 1500; // 2.8 detik
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(progress);
      
      if (progress >= 100) {
        // Reset setelah delay singkat
        setTimeout(() => {
          setProgress(0);
        }, 500);
      }
    }, 16); // ~60fps untuk animasi yang smooth

    return () => {
      clearInterval(dotsInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-orange-300 via-white to-blue-300">
      {/* Logo dengan animasi float yang smooth */}
      <div className="relative mb-8">
        <img 
          src="/burnLogo.png" 
          alt="Logo" 
          className="w-24 h-24 drop-shadow-lg animate-float" 
        />
        {/* Ring animasi di sekitar logo */}
        <div className="absolute inset-0 w-24 h-24 border-2 border-orange-400 rounded-full animate-ping opacity-30"></div>
      </div>

      {/* Text loading dengan animasi gradient */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
          Memuat Sistem Deteksi Luka Bakar{dots}
        </h2>
      </div>

      {/* Progress bar dengan glow effect */}
      <div className="w-[80%] md:w-[25rem] bg-white outline-2 outline-blue-500 rounded-full h-4 mb-6 backdrop-blur-sm shadow-inner">
        <div 
          className="bg-gradient-to-r from-orange-500 to-blue-500 h-4 rounded-full transition-all duration-300 shadow-lg animate-pulse"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}