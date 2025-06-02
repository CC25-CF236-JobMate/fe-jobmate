import React, { useState } from 'react';
import { Search, Briefcase, XCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobSearchStatus: React.FC = () => {
    const currentStep = 6;
    const [selected, setSelected] = useState('aktif');

    return (
        <div className="min-h-screen flex">
            {/* Kiri - Form */}
            <div className="w-full md:w-1/2 bg-white px-6 md:px-16 py-10 flex flex-col">
                {/* Back & Progress */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/jobpreferfill">
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

                <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        Apakah kamu sedang mencari peluang baru?
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Pilih salah satu opsi untuk menentukan status pencarian kerja kamu
                    </p>

                    <div className="space-y-3">
                        {/* Aktif Mencari */}
                        <button
                            onClick={() => setSelected('aktif')}
                            className={`w-full flex items-start gap-3 text-left px-4 py-3 rounded-lg border transition ${
                                selected === 'aktif'
                                    ? 'bg-blue-500 text-white border-blue-500'
                                    : 'bg-white border-gray-200'
                            }`}
                        >
                            <Search className="w-5 h-5 mt-1" />
                            <div>
                                <p className="font-medium">Ya, sedang aktif mencari</p>
                                <p className="text-xs">
                                    Dapatkan undangan pekerjaan eksklusif
                                </p>
                            </div>
                        </button>

                        {/* Terbuka */}
                        <button
                            onClick={() => setSelected('terbuka')}
                            className={`w-full flex items-start gap-3 text-left px-4 py-3 rounded-lg border transition ${
                                selected === 'terbuka'
                                    ? 'bg-blue-500 text-white border-blue-500'
                                    : 'bg-white border-gray-200'
                            }`}
                        >
                            <Briefcase className="w-5 h-5 mt-1" />
                            <div>
                                <p className="font-medium">Saya, terbuka</p>
                                <p className="text-xs">
                                    Pilih opsi ini untuk sesekali menerima undangan kerja
                                </p>
                            </div>
                        </button>

                        {/* Tidak terbuka */}
                        <button
                            onClick={() => setSelected('tidak')}
                            className={`w-full flex items-start gap-3 text-left px-4 py-3 rounded-lg border transition ${
                                selected === 'tidak'
                                    ? 'bg-blue-500 text-white border-blue-500'
                                    : 'bg-white border-gray-200'
                            }`}
                        >
                            <XCircle className="w-5 h-5 mt-1" />
                            <div>
                                <p className="font-medium">Tidak terbuka</p>
                                <p className="text-xs">
                                    Kamu dapat mengubah ini nanti ketika kamu membutuhkan pekerjaan
                                </p>
                            </div>
                        </button>
                    </div>

                    {/* Tombol selesai */}
                    <a
                        href="/"
                        className="block mt-8 w-full bg-blue-900 text-white py-2 rounded-lg text-center font-semibold hover:bg-blue-800 transition"
                    >
                        Selesai
                    </a>
                </div>
            </div>

            {/* Kanan - Gambar */}
            <div className="hidden md:flex w-1/2 bg-yellow-400 items-center justify-center">
                <img src="/jobsearchstatus-illustration.png" alt="Illustration" className="max-w-[70%]" />
            </div>
        </div>
    );
};

export default JobSearchStatus;
