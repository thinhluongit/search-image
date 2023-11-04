import React from "react";


function Photo({ photo }) {
  return (
    <div>
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={photo.urls.regular}
        alt={photo.description}
      />
    </div>
  );
}

export default Photo;
