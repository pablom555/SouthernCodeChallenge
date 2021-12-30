import React from "react";
import { RequestProvider } from "./context/requestContainer";
import MarsRoverGallery from "./Components/MarsRoverGallery";

function App() {
  return (
    <div className="w-full min-h-screen h-full bg-gray-800 ">
      <RequestProvider>
        <MarsRoverGallery />
      </RequestProvider>
    </div>
  );
}

export default App;
