import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, User, Briefcase } from 'lucide-react';
import iz from "../assets/images/Ihza.jpg";
import mk from "../assets/images/Markus.jpg";
import rz from "../assets/images/Rizky.jpg";
import rd from "../assets/images/Ridho.png";

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const profiles = [
    {
      "id": 1,
      "name": "Markus Hari Prima",
      "job": "AI Researcher",
      "description": "Melatih dan mengoptimalkan model YOLOv11 dengan dataset luka bakar dari Roboflow. Bertanggung jawab dalam integrasi model ke backend serta evaluasi performa model dalam mendeteksi derajat luka bakar.",
      "email": "12220146@nusamandiri.ac.id",
      "image": mk
    },
    {
      "id": 2,
      "name": "Ihza Eka Nandha",
      "job": "UI/UX Designer",
      "description": "Merancang tampilan dan alur pengguna dari website deteksi luka bakar. Bertanggung jawab dalam wireframing, prototyping, dan memastikan antarmuka mudah digunakan dan informatif bagi pengguna.",
      "email": "12220071@nusamandiri.ac.id",
      "image": iz
    },
    {
      "id": 3,
      "name": "Muhammad Rizky Ardiansyah",
      "job": "Frontend Developer",
      "description": "Bertanggung jawab dalam pengembangan antarmuka pengguna untuk website deteksi derajat luka bakar menggunakan React.js dan Tailwind CSS. Fokus pada pembuatan UI yang responsif dan integrasi hasil deteksi ke website.",
      "email": "12220166@nusamandiri.ac.id",
      "image": rz
    },
    {
      "id": 4,
      "name": "Ridho Ari Saputro",
      "job": "Backend Developer",
      "description": "Mengembangkan backend menggunakan FastAPI untuk memproses hasil deteksi luka bakar, menangani komunikasi antara frontend dan model YOLOv11, serta mengelola routing dan pengolahan data.",
      "email": "12220052@nusamandiri.ac.id",
      "image": rd
    }
  ];


  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, profiles.length]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === profiles.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? profiles.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}?subject=Halo! Saya tertarik untuk berkolaborasi&body=Halo, saya ingin berdiskusi lebih lanjut mengenai...`;
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="profile" className="min-h-[100dvh] py-20 inset-0 bg-gradient-to-br from-blue-50 from-20% via-orange-200 to-white select-none">
      <div className="max-w-6xl mx-auto px-10 md:px-10">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800 mb-4">Tim Pengembang</h2>
          <p data-aos="fade-up" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berkenalan dengan tim profesional kami yang siap membantu mewujudkan visi digital Anda
          </p>
        </div>
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Gallery Container */}
          <div data-aos="fade-up" className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-[90%] md:w-full md:h-[24rem] mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {profiles.map((profile, index) => (
                <div key={profile.id} className="min-w-full">
                  <div className="flex flex-col md:flex-row min-h-[400px] md:h-auto">
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative">
                      <div className="h-[17rem] md:h-[24rem] bg-none relative overflow-hidden rounded-b-4xl md:rounded-bl-none md:rounded-r-4xl">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-3/5 px-4 py-3 md:py-5 md:px-8 flex flex-col justify-between md:h-[24rem]">
                      <div className="space-y-3 md:space-y-6">
                        <div>
                          <h3 className="text-[1rem] md:text-2xl font-bold text-gray-800 mb-2 text-center md:text-left gap-3">
                            {profile.name}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold justify-center md:justify-start text-md md:text-lg mb-4">
                            <Briefcase className="hidden md:block" size={20} />
                            {profile.job}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm md:text-lg font-semibold text-gray-700">Deskripsi Tugas:</h4>
                          <p className="text-gray-600 leading-relaxed text-xs md:text-base text-justify">
                            {profile.description}
                          </p>
                        </div>

                        <div className="lg:flex lg:items-center gap-2 text-sm text-gray-800 font-medium hidden">
                          <Mail size={16} />
                          {profile.email}
                        </div>
                      </div>

                      {/* Contact Button - Centered */}
                      <div className="lg:mx-36 mx-auto">
                        <button
                          onClick={() => handleContactClick(profile.email)}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 md:px-7 md:py-3 mb-2 md:mb-0 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-row items-center gap-2 cursor-pointer"
                        >
                          <Mail size={18} />
                          Contact Me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Navigation Arrows */}
          <button data-aos="zoom-in"
            onClick={goToPrev}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-slate-900 hover:bg-white text-white hover:text-slate-950 hover:border-2 hover:border-slate-900 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-300 active:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button data-aos="zoom-in"
            onClick={goToNext}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-slate-900 hover:bg-white text-white hover:text-slate-950 hover:border-2 hover:border-slate-900 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-300 active:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {profiles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                  ? 'bg-black scale-125'
                  : 'bg-white hover:bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;