import { useState } from "react";

export default function Detect() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setFileInfo({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1), // MB
      });
      setError(null);
      setResult(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedImage(file);
        setFileInfo({
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(1), // MB
        });
        setError(null);
      } else {
        setError("Silakan unggah file gambar (JPG, PNG, JPEG)");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setFileInfo(null);
    setResult(null);
    setError(null);
  };

  const handleDetect = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);

    // Create FormData object to send the image
    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("https://rizkyaa-pojokkyy.hf.space/predict", {
        method: "POST",
        body: formData,
        // No need to set Content-Type header for FormData, browser handles it automatically
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Error detecting burn:", err);
      setError(err.message || "Gagal mendeteksi luka bakar. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to determine burn degree from detections
  const getBurnDegree = () => {
    if (!result || !result.detections || result.detections.length === 0) {
      return "Tidak Diketahui";
    }

    // Sort by confidence and get the highest one
    const highestConfidence = [...result.detections].sort((a, b) => b.confidence - a.confidence)[0];
    return highestConfidence.label;
  };

  // Helper to get description based on degree
  const getBurnDescription = (degree) => {
    switch (degree.toLowerCase()) {
      case "first-degree":
        return "Luka bakar derajat pertama hanya mempengaruhi lapisan luar kulit. Area luka tampak merah, nyeri, kering, dan tanpa lepuhan.";
      case "second-degree":
        return "Luka bakar derajat kedua melibatkan lapisan luar dan sebagian lapisan bawah kulit. Area luka tampak merah, melepuh, bengkak, dan nyeri.";
      case "third-degree":
        return "Luka bakar derajat ketiga merusak semua lapisan kulit. Area yang terbakar dapat tampak putih atau hangus. Luka ini mungkin tidak terasa sakit jika saraf rusak.";
      case "forth-degree":
        return "Luka bakar derajat keempat meluas melampaui kulit hingga ke tendon, otot, dan tulang. Area yang terbakar mungkin tampak menghitam atau hangus.";
      default:
        return "Tidak terdeteksi pola luka bakar yang jelas. Silakan konsultasikan dengan tenaga medis profesional untuk diagnosis yang tepat.";
    }
  };

  return (
    <section id="diagnose" className="min-h-screen flex py-20 justify-center px-4 relative overflow-hidden">
      {/* Animated Background - Melanjutkan dari section edukasi */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white from-20% via-orange-200 to-blue-50"></div>

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

      <div className="w-full max-w-md text-center select-none relative">
        <h1 data-aos="zoom-in" data-aos-duration="800" className="text-4xl font-bold mb-2">Burn <span className="text-amber-600">Alyze</span></h1>
        <p data-aos="zoom-in" data-aos-duration="800" className="text-lg text-gray-900 mb-6">
          Deteksi dan klasifikasi tingkat keparahan luka bakar.
        </p>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="text-left mb-2 font-medium">Gambar Luka</div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
          className="border-2 border-dashed border-blue-400 rounded-xl p-4 mb-2 relative bg-white/80 backdrop-blur-sm"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="flex flex-col items-center space-y-2">
            <div className="text-gray-700">Seret dan lepas file di sini</div>
            <div className="text-sm text-gray-400">Batas 100MB per file • JPG, PNG, JPEG</div>
            <label className="border-2 border-dashed border-blue-400 px-4 py-1 rounded-lg mt-2 cursor-pointer hover:bg-blue-500 hover:text-slate-50 transition">
              Pilih file
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="text-red-500 text-sm mb-2 bg-red-50/80 backdrop-blur-sm p-2 rounded-lg">{error}</div>
        )}

        {/* File Info Preview */}
        {fileInfo && (
          <div className="flex items-center justify-between border border-slate-200 bg-white/80 backdrop-blur-sm rounded-md px-4 py-2 mb-2">
            <div className="flex items-center space-x-2 text-gray-700">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span>{fileInfo.name}</span>
              <span className="text-sm text-gray-400 mt-1">{fileInfo.size}MB</span>
            </div>
            <button
              onClick={handleRemove}
              className="text-gray-500 hover:text-red-600 transition text-xl cursor-pointer"
            >
              &times;
            </button>
          </div>
        )}

        <button data-aos="fade-up" data-aos-duration="800"
          onClick={handleDetect}
          disabled={!selectedImage || isLoading}
          className="bg-black text-white w-full py-3 mt-2 rounded-xl text-lg font-medium shadow-lg hover:bg-blue-700 disabled:opacity-50 cursor-pointer transition-all duration-300"
        >
          {isLoading ? "Memproses..." : "Identifikasi"}
        </button>

        {/* Results displayed below button */}
        {result && (
          <div className="mt-6 border border-blue-700 rounded-xl p-4 text-left bg-white/90 backdrop-blur-sm shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Hasil Diagnosa</h2>

            <div className="mb-4 flex justify-center">
              <img
                src={`https://rizkyaa-pojokkyy.hf.space${result.result_image}`}
                alt="Hasil Deteksi"
                className="max-w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-gray-700">
                <span className="font-bold">Diagnosis:</span> {getBurnDegree()}
              </p>

              <p className="text-gray-700 text-sm">
                {getBurnDescription(getBurnDegree())}
              </p>

              {result.detections && result.detections.length > 0 && (
                <div className="text-sm text-gray-600 mt-2">
                  <p className="font-medium">Luka bakar yang terdeteksi:</p>
                  <ul className="list-disc pl-5 mt-1">
                    {result.detections.map((detection, index) => (
                      <li key={index}>
                        {detection.label}: {detection.confidence}% kepercayaan
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Disclaimer untuk hasil diagnosa */}
            <div className="mt-4 p-3 bg-yellow-50/80 backdrop-blur-sm border-l-4 border-yellow-400 rounded">
              <p className="text-yellow-800 text-xs">
                <strong>Peringatan:</strong> Hasil ini hanya untuk referensi dan tidak menggantikan diagnosis medis profesional. Selalu konsultasikan dengan dokter untuk penanganan yang tepat.
              </p>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}