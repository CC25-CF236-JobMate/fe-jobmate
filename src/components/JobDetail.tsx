import React from 'react';

const JobDetailPage: React.FC = () => {
    return (
        <section className="bg-blue-50 min-h-screen px-4 py-12">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
                {/* Back Button + Favorite */}
                <div className="flex justify-between items-start mb-4">
                    <a href="/jobsearch" className="text-sm text-blue-600"><img src="/backbutton.png" alt="Back Button" className="w-5 h-4" /></a>

                    <button className="border px-4 py-1 rounded text-sm text-gray-700 flex items-center gap-2">
                        Favorites
                        <img src="/favoriteicon.png" alt="Favorite Icon" className="w-3 h-4" />
                    </button>
                </div>

                {/* Title + Info */}
                <div className="flex items-start gap-4 mb-4">
                    <img src="/lowongan/logo2.png" alt="Company Logo" className="w-12 h-12 rounded" />
                    <div>
                        <h1 className="text-2xl font-semibold">Front-end Developer</h1>
                        <div className="text-sm text-gray-500 mt-1">📍 Sylhet, Bangladesh &nbsp; • &nbsp; ⏰ 4 days ago</div>
                    </div>
                </div>

                {/* Job Overview */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border rounded-lg p-4 bg-gray-50 mb-6">
                    <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="font-medium text-sm">Senior Level</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Job Type</p>
                        <p className="font-medium text-sm">Full Time</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Category</p>
                        <p className="font-medium text-sm">Design</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Salary</p>
                        <p className="font-medium text-sm">$3,000/m</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Work Type</p>
                        <p className="font-medium text-sm">Remote</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Company</p>
                        <p className="font-medium text-sm">UIHUT</p>
                    </div>
                </div>

                {/* About Company */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">About Company</h2>
                    <p className="text-sm text-gray-700">
                        UIHUT is the design marketplace and collaboration hub that brings the right people, information, and tools
                        together to get work done. From Fortune 100 companies to corner markets, millions of people around the world use
                        UIHUT to connect their teams, unify their systems, and drive their business forward.
                    </p>
                </div>

                {/* About the Job */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">About The Job</h2>
                    <p className="text-sm text-gray-700">
                        UIHUT designers work with speed and efficiency to deliver the highest quality of work. We are looking for someone
                        who is passionate about their client’s business, and ready to work on exciting projects with Fortune 500 companies
                        and Silicon Valley startups, with great rates and zero hassles. If you are looking for a place to advance your
                        career, enhance your skill set, and build connections around the globe, Slack is right for you.
                    </p>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">Requirements</h2>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>At least 3 years of professional experience as a Product Designer</li>
                        <li>
                            Proven experience in all phases of the design process including user research, copywriting, wireframing,
                            prototyping, visual design, interaction design, and usability testing
                        </li>
                        <li>UI/UX/Interaction Design experience is required</li>
                        <li>Experience with eCommerce or Landing Page Design is a bonus</li>
                        <li>Ability to collaborate with cross-functional team members is required</li>
                        <li>Ability to collect and interpret both qualitative and quantitative feedback is required</li>
                        <li>Experience with AR/VR is a strong advantage</li>
                        <li>Full-time availability is a strong advantage</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg">
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JobDetailPage;
