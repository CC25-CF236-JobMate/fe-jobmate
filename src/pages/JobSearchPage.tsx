import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobSearch from '../components/JobSearch';

const JobSearchPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <Navbar isLoggedIn={false} />
            <main className="flex-grow">
                <JobSearch />

                {/* Nanti tambahin section lainnya di bawah sini */}
            </main>
            <Footer />
        </div>
    );
};

export default JobSearchPage;