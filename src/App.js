import React, { useState } from "react";
import Title from "./components/Title.js";
import UploadForm from "./components/UploadForm";
import ImageGraid from "./components/ImageGraid";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGraid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
