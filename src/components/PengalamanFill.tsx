import React from 'react';
import {
    CalendarDays,
    Briefcase,
    User,
    ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PengalamanFill: React.FC = () => {
    const currentStep = 3;

    return (
        <div className="min-h-screen flex">
            {/* Kiri - Form */}
            <div className="w-full md:w-1/2 px-6 md:px-16 py-10 bg-white">
                {/* Back + Progress */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/pendidikanfill">
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

                {/* Judul */}
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pengalaman Kerja</h2>
                <p className="text-sm text-gray-600 mb-8">Isilah pengalaman kerja Anda dengan benar</p>

                {/* Form */}
                <form className="space-y-5">
                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role Pekerjaan</label>
                        <div className="relative">
                            <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300">
                                <option>Masukkan posisi pekerjaan terakhir</option>
                                <option>Software Engineer</option>
                                <option>Desainer UI/UX</option>
                            </select>
                            <Briefcase className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Perusahaan</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Masukkan perusahaan terakhir"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                            />
                            <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Tanggal Mulai */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                            />
                            <CalendarDays className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Tanggal Berakhir */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Berakhir</label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                            />
                            <CalendarDays className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                        <textarea
                            rows={3}
                            placeholder="Tuliskan deskripsi atau kegiatan yang kamu lakukan selama pendidikan"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300"
                        />
                    </div>

                    {/* Tombol */}
                    <a
                        href="/skillfill"
                        className="block w-full text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 font-semibold transition"
                    >
                        Berikutnya
                    </a>
                </form>
            </div>

            {/* Kanan - Gambar */}
            <div className="hidden md:flex w-1/2 bg-yellow-400 items-center justify-center">
                <img src="/experienceform-illustration.png" alt="Illustration" className="max-w-[70%]" />
            </div>
        </div>
    );
};

export default PengalamanFill;
