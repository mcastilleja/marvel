import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
    {/* <BowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="404" element={<Contacto />} />
        </Routes>
    </BowserRouter> */}
  </React.StrictMode>
);

