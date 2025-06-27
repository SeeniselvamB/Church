

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Timing from './Timing';
// import Events from './Events';
// import Images from './Images';
// import Location from './Location';
// import GalleryPage from './GalleryPage';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <section id="home"><Home /></section>
//                 <section id="about"><About /></section>
//                 <section id="timing"><Timing /></section>
//                 <section id="events"><Events /></section>
//                 <section id="gallery"><Images /></section>
//                 <section id="location"><Location /></section>
//               </>
//             }
//           />
//           <Route path="/gallery" element={<GalleryPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Timing from './Timing';
import Events from './Events';
import Images from './Images';
import Location from './Location';
import GalleryPage from './GalleryPage';
import HistoryPage from './HistoryPage';      // ✅ NEW
import TamilHistory from './TamilHistory';    // ✅ NEW
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="timing"><Timing /></section>
                <section id="events"><Events /></section>
                <section id="gallery"><Images /></section>
                <section id="location"><Location /></section>
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/history" element={<HistoryPage />} />          {/* ✅ */}
          <Route path="/history/tamil" element={<TamilHistory />} />  {/* ✅ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
