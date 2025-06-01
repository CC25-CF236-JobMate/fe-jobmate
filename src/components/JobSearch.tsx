import React, { useState } from 'react';
import LowonganTerbaru from '../components/LowonganTerbaru';
import { jobs as allJobs } from '../data/jobData';
import type { Job } from '../data/jobData';
import { Search, Filter, MapPin, Briefcase } from 'lucide-react';

const JobSearch: React.FC = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [jobTypeFilters, setJobTypeFilters] = useState<string[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(allJobs);
    const [selectedType, setSelectedType] = useState("Semua Tipe");

    const toggleFilter = () => setShowFilter(!showFilter);

    const applyFilters = () => {
        const result = allJobs.filter((job) =>
            selectedType === "Semua Tipe" || job.type.includes(selectedType)
        );
        setFilteredJobs(result);
        setShowFilter(false);
    };

    return (
        <section className="bg-blue-50 min-h-screen px-4 py-16">
            <div className="max-w-5xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Temukan dan Lamar <br /> Pekerjaan Inklusif Pilihanmu!
                    </h1>
                    <p className="text-sm text-gray-600 max-w-xl mx-auto">
                        The best place to discover & apply to the coolest start-up jobs.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <input
                        type="text"
                        placeholder="Posisi, Lokasi, atau Perusahaan"
                        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300"
                    />
                    <button className="bg-blue-900 text-white p-3 rounded-lg">
                        <Search className="w-4 h-4" />
                    </button>
                    <button
                        onClick={toggleFilter}
                        className="bg-white border text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                {/* FILTER MODAL */}
                {showFilter && (
                    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-start pt-32">
                        <div className="bg-white w-80 rounded-xl shadow-xl p-6 space-y-6">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <Filter className="w-5 h-5" />
                                Saring Lowongan
                            </h3>

                            <div className="space-y-4 text-sm">
                                {/* Kata Kunci */}
                                <div>
                                    <label className="block mb-1 text-gray-700 font-medium">Kata Kunci</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Jabatan, perusahaan, skill..."
                                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                {/* Lokasi */}
                                <div>
                                    <label className="block mb-1 text-gray-700 font-medium">Lokasi</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Kota atau daerah"
                                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                {/* Tipe Pekerjaan */}
                                <div>
                                    <label className="block mb-1 text-gray-700 font-medium">Tipe Pekerjaan</label>
                                    <div className="relative">
                                        <select
                                            value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                                        >
                                            <option>Semua Tipe</option>
                                            <option>Fulltime</option>
                                            <option>WFH</option>
                                        </select>
                                        <Briefcase className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={applyFilters}
                                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-medium"
                                >
                                    Cari
                                </button>
                                <button
                                    onClick={() => {
                                        setJobTypeFilters([]);
                                        setSelectedType("Semua Tipe");
                                        setFilteredJobs(allJobs);
                                        setShowFilter(false);
                                    }}
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Heading */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Lowongan Untukmu</h2>
                </div>

                {/* Job Cards */}
                <LowonganTerbaru showHeader={false} showButton={false} jobs={filteredJobs} />
            </div>
        </section>
    );
};

export default JobSearch;
