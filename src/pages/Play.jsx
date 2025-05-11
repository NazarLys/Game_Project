import React from 'react';

const Play = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <iframe
        src="/game/Table_of_Deceit.html"
        width="960"
        height="540"
        frameBorder="0"
        allowFullScreen
        title="Table of Deceit"
      ></iframe>
    </div>
  );
};

export default Play;