import React from 'react';
import {
    User,
    Calendar,
    Phone,
    MapPin,
    Accessibility,
    ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfileFill: React.FC = () => {
    const currentStep = 1; // 1 sampai 6

    return (
        <div className="min-h-screen flex">
            {/* Kiri - Form Input */}
            <div className="w-full md:w-1/2 bg-white px-6 md:px-16 py-10">
                {/* Back button + Progress bar */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/login">
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

                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Lengkapi Data Diri</h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Isi data dirimu dengan lengkap dan benar
                    </p>

                    <form className="space-y-5">
                        {/* Input Nama */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Masukkan nama lengkap"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                                />
                                <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Input Tanggal Lahir */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                                />
                                <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Select Disabilitas */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Disabilitas</label>
                            <div className="relative">
                                <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300">
                                    <option>Pilih kategori disabilitas Anda</option>
                                    <option>Disabilitas Fisik</option>
                                    <option>Disabilitas Sensorik</option>
                                    <option>Disabilitas Mental</option>
                                </select>
                                <Accessibility className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Input Telepon */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Masukkan nomor telepon"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                                />
                                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Input Alamat */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Domisili</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Masukkan alamat domisili"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                                />
                                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                            </div>
                        </div>
                        <a
                            href="/pendidikanfill"
                            className="block w-full text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 font-semibold transition"
                        >
                            Berikutnya
                        </a>
                    </form>
                </div>
            </div>

            {/* Kanan - Gambar */}
            <div className="hidden md:flex w-1/2 bg-yellow-400 items-center justify-center">
                <img src="/resumeform-illustration.png" alt="Illustration" className="max-w-[70%]" />
            </div>
        </div>
    );
};

export default ProfileFill;
