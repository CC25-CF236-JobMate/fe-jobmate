// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<HomePage />} />
      
      <Route path="*" element={<div>Halaman Tidak Ditemukan</div>} /> {/* Untuk halaman yang tidak ada */}
    </Routes>
  );
}

export default App;