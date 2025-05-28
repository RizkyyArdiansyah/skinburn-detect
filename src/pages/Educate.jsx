import { useState } from "react";
import d1 from "../assets/images/d1.jpg";
import d2 from "../assets/images/d2.jpg";
import d3 from "../assets/images/d3.jpg";
import d4 from "../assets/images/d4.jpg";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import mf1 from "../assets/images/mf1.jpg";
import mf2 from "../assets/images/mf2.jpg";
import mf3 from "../assets/images/mf3.jpg";
import mf4 from "../assets/images/mf4.jpg";
import mf5 from "../assets/images/mf5.jpg";

export default function Edukasi() {
  const [activeTab, setActiveTab] = useState("tingkatanLuka");

  const tabContent = {
    tingkatanLuka: {
      title: "Tingkatan Luka Bakar",
      content: [
        {
          degree: "Luka Bakar Derajat Pertama (First-Degree)",
          description: "Hanya mempengaruhi lapisan terluar kulit (epidermis).",
          symptoms: ["Kemerahan pada kulit", "Nyeri", "Pembengkakan ringan", "Kering (tidak ada lepuhan)"],
          example: "Terbakar sinar matahari ringan.",
          image: d1
        },
        {
          degree: "Luka Bakar Derajat Kedua (Second-Degree)",
          description: "Mempengaruhi epidermis dan sebagian dermis (lapisan kedua kulit).",
          symptoms: ["Merah terang", "Nyeri", "Bengkak", "Lepuhan berisi cairan", "Tampak mengkilap atau lembab"],
          example: "Terkena air mendidih atau minyak panas.",
          image: d2
        },
        {
          degree: "Luka Bakar Derajat Ketiga (Third-Degree)",
          description: "Merusak epidermis dan seluruh dermis hingga mencapai jaringan subkutan.",
          symptoms: ["Tampak putih atau hangus/kering", "Tekstur kulit kering dan kertas", "Mungkin tidak terasa sakit karena saraf rusak", "Tidak ada elastisitas kulit"],
          example: "Terkena api langsung, kontak dengan listrik tegangan tinggi, atau bahan kimia yang sangat korosif.",
          image: d3
        },
        {
          degree: "Luka Bakar Derajat Keempat (Fourth-Degree)",
          description: "Merusak semua lapisan kulit dan mencapai jaringan di bawah kulit seperti otot, tendon, dan tulang.",
          symptoms: ["Tampak hitam atau terbakar", "Kering", "Tidak ada rasa sakit karena kerusakan saraf parah", "Jaringan mati (nekrosis)"],
          example: "Kontak berkepanjangan dengan api, arus listrik yang kuat, atau bahan kimia korosif.",
          image: d4
        }
      ]
    },
    firstAid: {
      title: "Pertolongan Pertama",
      steps: [
        {
          title: "Hentikan Proses Pembakaran",
          description: "Jauhkan korban dari sumber panas. Jika pakaian terbakar, baringkan korban dan gulung-gulingkan untuk memadamkan api atau selimuti dengan kain non-sintetis.",
          image: p1
        },
        {
          title: "Dinginkan Area Terbakar",
          description: "Siram dengan air dingin (bukan es) selama 10-15 menit untuk menghentikan proses pembakaran dan mengurangi rasa sakit. Jangan gunakan es karena dapat memperburuk kerusakan jaringan.",
          image: p2
        },
        {
          title: "Lepas Aksesoris",
          description: "Lepaskan cincin, jam tangan, ikat pinggang, atau pakaian ketat dari area terbakar sebelum bengkak terjadi. Jangan lepaskan pakaian yang melekat pada luka bakar.",
          image: p3
        },
        {
          title: "Tutup Luka",
          description: "Tutup luka bakar dengan kain bersih dan lembab atau perban steril non-lengket. Jangan gunakan kapas atau bahan berbulu yang bisa menempel di luka.",
          image: p4
        },
        {
          title: "Hindari Yang Tidak Boleh Dilakukan",
          description: "Jangan oleskan mentega, minyak, pasta gigi, atau ramuan tradisional pada luka bakar. Hal ini dapat menyebabkan infeksi atau mempersulit penanganan medis.",
          image: p5
        }
      ]
    },
    whenToSeek: {
      title: "Kapan Harus ke Dokter",
      conditions: [
        {
          condition: "Luka bakar derajat kedua lebih dari 3 inci (7,5 cm)",
          description: "Luka bakar derajat kedua yang cukup besar memerlukan penanganan medis untuk mencegah infeksi dan mempercepat penyembuhan.",
          urgent: false
        },
        {
          condition: "Luka bakar pada wajah, tangan, kaki, alat kelamin, atau persendian utama",
          description: "Area-area ini memerlukan perawatan khusus untuk meminimalkan bekas luka dan gangguan fungsi.",
          urgent: true
        },
        {
          condition: "Semua luka bakar derajat ketiga dan keempat",
          description: "Luka bakar parah ini selalu memerlukan penanganan medis darurat karena berisiko tinggi menyebabkan komplikasi serius.",
          urgent: true
        },
        {
          condition: "Luka bakar akibat listrik atau bahan kimia",
          description: "Luka bakar jenis ini bisa menyebabkan kerusakan internal yang tidak terlihat dari luar.",
          urgent: true
        },
        {
          condition: "Tanda-tanda infeksi",
          description: "Kemerahan yang bertambah, pembengkakan, rasa sakit meningkat, keluarnya nanah, atau demam adalah tanda infeksi yang memerlukan penanganan medis.",
          urgent: true
        },
        {
          condition: "Kesulitan bernapas",
          description: "Luka bakar di wajah atau menghirup asap dapat menyebabkan gangguan pernapasan yang memerlukan bantuan medis segera.",
          urgent: true
        }
      ]
    },
    myths: {
      title: "Mitos dan Fakta",
      items: [
        {
          myth: "Mengoleskan mentega atau pasta gigi dapat menyembuhkan luka bakar.",
          fact: "Mentega, pasta gigi, atau minyak justru dapat memperparah luka dan meningkatkan risiko infeksi. Air dingin adalah penanganan pertama terbaik.",
          image: mf1
        },
        {
          myth: "Meletakkan es pada luka bakar dapat mempercepat penyembuhan.",
          fact: "Es dapat menyebabkan kerusakan jaringan tambahan dan memperburuk luka bakar. Gunakan air dingin mengalir, bukan es.",
          image: mf2
        },
        {
          myth: "Lepuhan harus segera dipecahkan untuk penyembuhan lebih cepat.",
          fact: "Lepuhan adalah pelindung alami terhadap infeksi. Jangan pecahkan lepuhan karena dapat meningkatkan risiko infeksi dan memperlambat penyembuhan.",
          image: mf3
        },
        {
          myth: "Luka bakar kecil tidak perlu diobati.",
          fact: "Semua luka bakar, termasuk yang ringan, perlu didinginkan dan dilindungi untuk mencegah infeksi dan mempercepat penyembuhan.",
          image: mf4
        },
        {
          myth: "Luka bakar parah tidak terasa sakit",
          fact: "Walaupun luka bakar derajat tiga dapat merusak saraf dan mengurangi sensasi nyeri, area di sekitarnya masih bisa sangat nyeri.",
          image: mf5
        }
      ]
    }
  };

  return (
    <section id="edukasi" className="scroll py-10 md:py-12 px-2 select-none relative overflow-hidden z-10 min-h-[100dvh]">
      {/* Animated Background - Melanjutkan dari Home */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-white to-orange-200"></div>

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

      <div className="container mx-auto px-2 relative">
        <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl font-bold text-center mt-8 mb-2">Edukasi Luka Bakar</h2>
        <p data-aos="fade-up" data-aos-duration="1000" className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
          Pahami tingkat keparahan luka bakar, cara penanganan pertama, dan kapan harus mencari bantuan medis profesional.
        </p>

        {/* Tabs Navigation */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="flex flex-wrap justify-center mb-6 gap-2">
          {Object.keys(tabContent).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`px-4 py-2 rounded-full text-[0.86rem] font-medium transition cursor-pointer transform hover:scale-105 ${activeTab === tabKey
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white/80 backdrop-blur-sm border border-amber-500 text-gray-700 hover:bg-white/90"
                }`}
            >
              {tabContent[tabKey].title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="bg-white/85 backdrop-blur-sm border border-amber-500/50 rounded-xl shadow-lg overflow-hidden">
          {/* Tingkatan Luka Bakar Content */}
          {activeTab === "tingkatanLuka" && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {tabContent.tingkatanLuka.content.map((item, index) => (
                  <div key={index} className="border border-gray-200/50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm transform hover:scale-105">
                    <div className="bg-gray-100/80 h-auto md:h-40 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.degree}
                        className="object-cover h-auto md:h-[110%] w-full md:w-full"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-sm font-bold mb-2">{item.degree}</h4>
                      <p className="text-[0.85rem] text-gray-800 mb-3">{item.description}</p>

                      <h5 className="text-sm font-medium text-gray-800 mb-1">Gejala:</h5>
                      <ul className="list-disc pl-5 mb-3">
                        {item.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-[0.85rem] text-gray-800">{symptom}</li>
                        ))}
                      </ul>

                      <p className="text-[0.85rem] text-blue-500 italic">Contoh: {item.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pertolongan Pertama Content */}
          {activeTab === "firstAid" && (
            <div className="p-6">
              <div className="flex flex-col space-y-8">
                {tabContent.firstAid.steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 items-center bg-white/50 backdrop-blur-sm rounded-lg p-4 hover:bg-white/70 transition-all duration-300">
                    <div className="bg-gray-100/80 rounded-lg h-48 w-full md:w-[28%] flex items-center justify-center overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="object-cover md:h-[100%] w-auto"
                      />
                    </div>
                    <div className="w-full md:w-2/3 md:-mt-19">
                      <h4 className="text-[1rem] md:text-xl font-semibold mb-2 flex">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mr-2">{index + 1}</span>
                        {step.title}
                      </h4>
                      <p className="text-sm md:text-lg text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kapan Harus ke Dokter Content */}
          {activeTab === "whenToSeek" && (
            <div className="p-6">
              <h3 className="text-md md:text-lg font-bold text-center mb-4">{tabContent.whenToSeek.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tabContent.whenToSeek.conditions.map((item, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-lg border-l-4 border-r-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${item.urgent
                      ? "border-red-500 bg-red-50/80 hover:bg-red-50/90"
                      : "border-yellow-500 bg-yellow-50/80 hover:bg-yellow-50/90"
                      }`}
                  >
                    <h4 className="font-semibold text-[0.8rem] mb-2 flex flex-col items-center">
                      {item.urgent && (
                        <svg className="w-5 h-5 text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )}
                      {item.condition}
                    </h4>
                    <p className="text-gray-800 text-[0.8rem]">{item.description}</p>
                    {item.urgent && (
                      <p className="text-red-600 text-xs md:text-sm font-medium mt-2">Perlu pertolongan medis segera!</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mitos dan Fakta Content */}
          {activeTab === "myths" && (
            <div className="p-4">
              <div className="space-y-6">
                {tabContent.myths.items.map((item, index) => (
                  <div key={index} className="flex flex-row gap-6 border-b border-gray-200/50 pb-6 last:border-0 bg-white/40 backdrop-blur-sm rounded-lg p-4 hover:bg-white/60 transition-all duration-300">
                    <div className="bg-gray-100/80 rounded-lg h-40 w-full md:w-1/4 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image || `/api/placeholder/240/160`}
                        alt={`Mitos: ${item.myth}`}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="w-full md:w-3/4">
                      <div className="mb-3 md:mt-8">
                        <h4 className="text-[0.9rem] md:text-lg font-semibold text-red-600 flex items-center">
                          <span>Mitos: {item.myth}</span>
                        </h4>
                      </div>
                      <div>
                        <h4 className="text-[0.9rem] md:text-lg font-semibold text-green-600 flex items-center">
                          Fakta: {item.fact}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div data-aos="fade-left" data-aos-duration="1000" className="mt-10 p-4 bg-white/80 backdrop-blur-sm border-l-4 border-yellow-400 rounded shadow-lg">
          <p className="text-gray-700 text-justify">
            <strong>Catatan:</strong> Informasi ini disediakan untuk tujuan edukasi dan tidak dimaksudkan untuk menggantikan nasihat medis profesional.
            Selalu konsultasikan dengan penyedia layanan kesehatan untuk diagnosis dan perawatan luka bakar.
          </p>
        </div>
      </div>

    </section>
  );
}