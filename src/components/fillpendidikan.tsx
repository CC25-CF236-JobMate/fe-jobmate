import React from 'react';
import { GraduationCap, BookOpenText, CalendarCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FillPendidikan: React.FC = () => {
    const currentStep = 2;

    return (
        <div className="min-h-screen flex">
            {/* Kiri - Form */}
            <div className="w-full md:w-1/2 px-6 md:px-16 py-10 bg-white">
                {/* Header & Progress */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/profilefill">
                        <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
                    </Link>
                    <div className="flex gap-2 flex-1 justify-center">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-8 rounded-full ${
                                    index < currentStep ? 'bg-yellow-400' : 'bg-gray-200'
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Pendidikan Terakhir</h2>
                    <p className="text-sm text-gray-600 mb-8">Isilah riwayat pendidikan Anda dengan benar</p>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pendidikan Terakhir</label>
                            <div className="relative">
                                <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300">
                                    <option value="">Masukkan pendidikan terakhir (S1/SMA)</option>
                                    <option value="SMA">SMA/SMK</option>
                                    <option value="D3">Diploma</option>
                                    <option value="S1">Sarjana (S1)</option>
                                    <option value="S2">Magister (S2)</option>
                                </select>
                                <GraduationCap className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Jurusan Pendidikan</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Masukkan jurusan pendidikan"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                                />
                                <BookOpenText className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Kelulusan</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                                />
                                <CalendarCheck className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                            <textarea
                                rows={4}
                                placeholder="Tuliskan deskripsi atau kegiatan yang kamu lakukan selama pendidikan"
                                className="w-full p-4 rounded-lg border border-gray-300"
                            />
                        </div>
                        <a
                            href="/pengalamanfill"
                            className="block w-full text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 font-semibold transition"
                        >
                            Berikutnya
                        </a>
                    </form>
                </div>
            </div>

            {/* Kanan - Ilustrasi */}
            <div className="hidden md:flex w-1/2 bg-yellow-400 items-center justify-center">
                <img
                    src="/pendidikan-illustration.png"
                    alt="Pendidikan"
                    className="max-w-[70%]"
                />
            </div>
        </div>
    );
};

export default FillPendidikan;
