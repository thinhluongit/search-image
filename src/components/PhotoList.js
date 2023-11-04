import React from "react";
import Photo from "./Photo";


function PhotoList({ photos }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl: grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoList;
