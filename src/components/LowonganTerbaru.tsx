import React from 'react';
import type { Job } from '../data/jobData';

interface Props {
    showHeader?: boolean;
    showButton?: boolean;
    sectionTitle?: string;
    jobs?: Job[];
}

const LowonganTerbaru: React.FC<Props> = ({
                                              showHeader = true,
                                              showButton = true,
                                              sectionTitle = 'Lowongan Kerja Terbaru',
                                              jobs = [],
                                          }) => {
    return (
        <section className="bg-blue-50 py-16 px-4">
            {showHeader && (
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                        {sectionTitle}
                    </h2>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                        Mencari dan menemukan pekerjaan impian kini lebih mudah dari sebelumnya...
                    </p>
                </div>
            )}

            <div className="max-w-5xl mx-auto space-y-6">
                {jobs.map((job, i) => (
                    <div key={i} className="bg-white rounded-xl shadow border border-blue-100 p-6">
                        {/* isi kartu */}
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex items-start gap-4">
                                <img src={job.logo} alt="Logo" className="w-10 h-10 rounded" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                                    <div className="mt-1">
                    <span className="text-xs border border-gray-500 text-gray-500 font-medium px-2 py-1 rounded-md">
                      {job.disabilitas}
                    </span>
                                    </div>
                                </div>
                            </div>
                            <a href="/jobdetail" className="text-sm border px-4 py-1 rounded-lg hover:bg-gray-100 transition">
                                Lamar Sekarang
                            </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            Kami sedang mencari seorang {job.title.toLowerCase()}...
                        </p>
                        <hr className="my-4 border-t border-gray-200" />
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                            {job.type.map((type, idx) => (
                                <span
                                    key={idx}
                                    className={`px-2 py-1 rounded font-medium ${
                                        type === 'Fulltime'
                                            ? 'bg-orange-100 text-orange-700'
                                            : 'bg-red-100 text-red-700'
                                    }`}
                                >
                  {type}
                </span>
                            ))}
                            <span className="text-gray-500">📍 {job.location}</span>
                            <span className="text-gray-500">⏰ {job.posted}</span>
                        </div>
                    </div>
                ))}
            </div>

            {showButton && (
                <div className="mt-10 text-center">
                    <a
                        href="/jobsearch"
                        className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition text-sm font-medium"
                    >
                        Lihat Semuanya
                    </a>
                </div>
            )}
        </section>
    );
};

export default LowonganTerbaru;
