// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import JobSearchPage from './pages/JobSearchPage';
import JobDetailPage from './pages/JobDetailPage';
import CvReviewPage from "./pages/CvReviewPage.tsx";
import ResumeAnalysisPage from "./pages/ResumeAnalysisPage.tsx";
import ProfileFillPage from './pages/ProfileFillPage';
import FillPendidikanPage from "./pages/FillPendidikanPage.tsx";
import PengalamanFillPage from "./pages/PengalamanFillPage.tsx";
import SkillFillPage from "./pages/SkillFillPage.tsx";
import JobPreferPage from "./pages/JobPreferPage.tsx";
import JobSearchStatusPage from "./pages/JobSearchStatusPage.tsx";

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
        <Route path="/profilefill" element={<ProfileFillPage />}/>
        <Route path="/pendidikanfill" element={<FillPendidikanPage />}/>
        <Route path="/pengalamanfill" element={<PengalamanFillPage />}/>
        <Route path="/skillfill" element={<SkillFillPage />}/>
        <Route path="/jobpreferfill" element={<JobPreferPage />}/>
        <Route path="/jobstatus" element={<JobSearchStatusPage />}/>
      
      <Route path="*" element={<div>Halaman Tidak Ditemukan</div>} /> {/* Untuk halaman yang tidak ada */}
    </Routes>
  );
}

export default App;