import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BelgiumPage from './BelgiumPage'; // Add more pages as needed
import Spain_Page from './Spain_Page'; // Add more pages as needed
import FrancePage from './FrancePage'; // Add more pages as needed
import JordanPage from './JordanPage'; // Add more pages as needed
import { HashRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/belgium" element={<BelgiumPage />} />
        <Route path="/spain" element={<Spain_Page />} />
        <Route path="/france" element={<FrancePage />} />
	<Route path="/jordan" element={<JordanPage />} />
        {/* Add more country routes here */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
