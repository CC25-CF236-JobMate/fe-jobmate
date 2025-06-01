import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobDetail from "../components/JobDetail.tsx";

const JobDetailPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <Navbar isLoggedIn={false} />
            <main className="flex-grow">
            <JobDetail />

                {/* Nanti tambahin section lainnya di bawah sini */}
            </main>
            <Footer />
        </div>
    );
};

export default JobDetailPage;