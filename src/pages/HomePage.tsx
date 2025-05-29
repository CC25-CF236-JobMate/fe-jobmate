import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomepageContent from '../components/HomepageContent';
import SectionAbout from '../components/SectionAbout';
import SectionStats from '../components/SectionStats';
import WhyJobmateSection from '../components/WhyJobMateSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar isLoggedIn={false} />
      <main className="flex-grow">
        <HomepageContent />
        <SectionAbout />
        <WhyJobmateSection />
        <SectionStats />
        
        {/* Nanti tambahin section lainnya di bawah sini */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
