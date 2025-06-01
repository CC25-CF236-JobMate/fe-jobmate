// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import JobSearchPage from './pages/JobSearchPage';
import JobDetailPage from './pages/JobDetailPage';
import CvReviewPage from "./pages/CvReviewPage.tsx";
import ResumeAnalysisPage from "./pages/ResumeAnalysisPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<HomePage />} />
        <Route path="/jobsearch" element={<JobSearchPage />}/>
        <Route path="/jobdetail" element={<JobDetailPage />}/>
        <Route path="/cvreview" element={<CvReviewPage />}/>
        <Route path="/resumeanalysis" element={<ResumeAnalysisPage />}/>
      
      <Route path="*" element={<div>Halaman Tidak Ditemukan</div>} /> {/* Untuk halaman yang tidak ada */}
    </Routes>
  );
}

export default App;