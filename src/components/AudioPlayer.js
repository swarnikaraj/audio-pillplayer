import React, { useState } from "react";

function AudioPlayer() {
  const [audioFiles, setAudioFiles] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    setAudioFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <div>
      {/* Input element for file upload */}
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileUpload}
      />

      {/* Display uploaded audio files */}
      <div>
        {audioFiles.map((file, index) => (
          <div key={index}>
            {file.name} - {file.size} bytes
          </div>
        ))}
      </div>
    </div>
  );
}

export default AudioPlayer;
