import React, { useState } from "react";

const UploadImages = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages([...images, ...selectedFiles]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept="image/*"
      />
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${index}`}
              style={{
                width: "100px",
                height: "100px",
                marginRight: "10px",
                marginTop: "10px",
              }}
            />
            <button
              className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full flex items-center justify-center"
              onClick={() => handleRemoveImage(index)}
              style={{
                fontSize: "0.75rem",
                width: "1rem",
                height: "1rem",
              }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImages;
