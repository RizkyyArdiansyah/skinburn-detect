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
        setError("Please upload an image file (JPG, PNG, JPEG)");
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
      const response = await fetch("/predict", {
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
      setError(err.message || "Failed to detect burn. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to determine burn degree from detections
  const getBurnDegree = () => {
    if (!result || !result.detections || result.detections.length === 0) {
      return "Unknown";
    }

    // Sort by confidence and get the highest one
    const highestConfidence = [...result.detections].sort((a, b) => b.confidence - a.confidence)[0];
    return highestConfidence.label;
  };

  // Helper to get description based on degree
  const getBurnDescription = (degree) => {
    switch (degree.toLowerCase()) {
      case "first-degree":
        return "First-Degree burns affect only the outer layer of skin. The burn site is red, painful, dry, and with no blisters.";
      case "second-degree":
        return "Second-Degree burns involve the outer layer and part of the lower layer of skin. The burn site appears red, blistered, swollen, and painful.";
      case "third-degree":
        return "Third-Degree burns destroy all layers of skin. The burned area can look white or charred. These burns may cause little or no pain if nerves are damaged.";
      case "forth-degree":
        return "Forth-Degree burns extend beyond the skin into tendons, muscles, and bones. The burned area may appear blackened or charred.";
      default:
        return "No clear burn pattern detected. Please consult a medical professional for proper diagnosis.";
    }
  };

  return (
    <section id="diagnose" className="min-h-screen flex py-20 justify-center bg-white px-4">
      <div className="w-full max-w-md text-center select-none">
        <h1 data-aos="zoom-in" data-aos-duration="800" className="text-4xl font-bold mb-2">Burn <span className="text-blue-600">Alyze</span></h1>
        <p data-aos="zoom-in" data-aos-duration="800" className="text-lg text-gray-600 mb-6">
          Detect and classify burn severity levels.
        </p>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="text-left mb-2 font-medium">Skin Image</div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
          className="border-2 border-dashed border-blue-400 rounded-xl p-4 mb-2 relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="flex flex-col items-center space-y-2">
            <div className="text-gray-700">Drag and drop file here</div>
            <div className="text-sm text-gray-400">Limit 200MB per file • JPG, PNG, JPEG</div>
            <label className="border-2 border-dashed border-blue-400 px-4 py-1 rounded-lg mt-2 cursor-pointer hover:bg-blue-500 hover:text-slate-50 transition">
              Browse files
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
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}

        {/* File Info Preview */}
        {fileInfo && (
          <div className="flex items-center justify-between border border-slate-50 rounded-md px-4 py-2 mb-2">
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
          className="bg-black text-white w-full py-3 mt-2 rounded-xl text-lg font-medium shadow-lg hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
        >
          {isLoading ? "Processing..." : "Identification"}
        </button>

        {/* Results displayed below button */}
        {result && (
          <div className="mt-6 border border-blue-700 rounded-xl p-4 text-left">
            <h2 className="text-xl font-semibold mb-4 text-center">Result</h2>
            
            <div className="mb-4 flex justify-center">
              <img 
                src={`http://localhost:8000${result.result_image}`} 
                alt="Detection Result" 
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
                  <p className="font-medium">Detected burns:</p>
                  <ul className="list-disc pl-5 mt-1">
                    {result.detections.map((detection, index) => (
                      <li key={index}>
                        {detection.label}: {detection.confidence}% confidence
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}