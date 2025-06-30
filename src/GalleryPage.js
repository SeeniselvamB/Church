// import React from 'react';
// import { useEffect } from 'react';
// import './GalleryPage.css';

// import img1 from './images/Church.png';
// import img2 from './images/Church2.jpg';
// import img3 from './images/Church3.jpg';
// import img4 from './images/Church4.jpg';
// import img5 from './images/Church5.jpg';
// import img6 from './images/Church6.jpg';

// function GalleryPage() {
//   useEffect(() => {
//       window.scrollTo(0, 0);
//     }, []);
//   const images = [img1, img2, img3, img4, img5, img6];

//   return (
//     <div className="gallery-page">
//       <h2>Church Images</h2>
//       <div className="gallery-grid">
//         {images.map((src, index) => (
//           <img key={index} src={src} alt={`Church ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GalleryPage;

import React, { useState, useEffect } from 'react';
import './GalleryPage.css';

import img1 from './images/Church.png';
import img2 from './images/Church2.jpg';
import img3 from './images/Church3.jpg';
import img4 from './images/Church4.jpg';
import img5 from './images/Church5.jpg';
import img6 from './images/Church6.jpg';

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3, img4, img5, img6];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      <h2>Church Images</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Church ${index + 1}`}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full view" />
            <span className="modal-close" onClick={() => setSelectedImage(null)}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
