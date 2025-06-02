import React from 'react';
import {
    Briefcase,
    Building2,
    MapPin,
    ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JobPrefer: React.FC = () => {
    const currentStep = 5; // posisi progress bar

    return (
        <div className="min-h-screen flex">
            {/* Kiri - Form Input */}
            <div className="w-full md:w-1/2 bg-white px-6 md:px-16 py-10">
                {/* Back button + Progress bar */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/skillfill">
                        <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
                    </Link>
                    <div className="flex gap-2 flex-1 justify-center">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-8 rounded-full ${
                                    index < currentStep ? 'bg-yellow-400' : 'bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Form */}
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Preferensi Pekerjaan</h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Pilihlah posisi pekerjaan yang sesuai minat dan skill kamu!
                    </p>

                    <form className="space-y-5">
                        {/* Role Pekerjaan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Preferensi Role Pekerjaan
                            </label>
                            <div className="relative">
                                <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300">
                                    <option>Masukkan posisi pekerjaan impianmu</option>
                                    <option>Frontend Developer</option>
                                    <option>Data Analyst</option>
                                    <option>Product Manager</option>
                                </select>
                                <Briefcase className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Industri */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Industri
                            </label>
                            <div className="relative">
                                <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300">
                                    <option>Masukkan industri perusahaan impian</option>
                                    <option>Teknologi</option>
                                    <option>Keuangan</option>
                                    <option>Kesehatan</option>
                                </select>
                                <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Tipe Pekerjaan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tipe Pekerjaan
                            </label>
                            <div className="relative">
                                <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300">
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Remote</option>
                                    <option>Kontrak</option>
                                </select>
                                <Briefcase className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Lokasi */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Preferensi Lokasi
                            </label>
                            <div className="relative">
                                <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300">
                                    <option>Cari lokasi preferensimu</option>
                                    <option>Jakarta</option>
                                    <option>Bandung</option>
                                    <option>Remote</option>
                                </select>
                                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <a
                            href="/jobstatus"
                            className="block w-full text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 font-semibold transition"
                        >
                            Berikutnya
                        </a>
                    </form>
                </div>
            </div>

            {/* Kanan - Gambar */}
            <div className="hidden md:flex w-1/2 bg-yellow-400 items-center justify-center">
                <img src="/softskills-illustration.png" alt="Illustration" className="max-w-[70%]" />
            </div>
        </div>
    );
};

export default JobPrefer;