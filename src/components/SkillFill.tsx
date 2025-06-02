import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const allSkills = [
    'Admin', '.Net', '3D Model', 'A/B Testing', 'ACL Analytics', 'API Testing',
    'Accounting', 'Academic Writing', 'Account Management', 'Account Payable',
    'Accurate', 'Active Listening'
];

const SkillFill: React.FC = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const currentStep = 4;

    const toggleSkill = (skill: string) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else if (selectedSkills.length < 5) {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Kiri - Form */}
            <div className="w-full md:w-1/2 bg-white px-6 md:px-16 py-10 shadow-xl rounded-2xl">
            {/* Back + Progress Bar */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/pengalamanfill">
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

                {/* Form Konten */}
                <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">Tambahkan Skill</h2>
                <p className="text-sm text-gray-600 mb-6 text-center">Kamu bisa memilih skill yang kamu kuasai hingga 5 skill</p>

                {/* Search (dummy searchbox) */}
                <div className="w-full max-w-sm mx-auto">
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Cari Skill"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                    />
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                </div>
                </div>

                {/* Skill Tags */}
                <div className="w-full max-w-sm mx-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {allSkills.map((skill) => (
                        <button
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                            className={`px-3 py-1 rounded-full border text-sm ${
                                selectedSkills.includes(skill)
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white border-blue-400 text-blue-700'
                            }`}
                        >
                            {skill} {selectedSkills.includes(skill) ? '' : '+'}
                        </button>
                    ))}
                </div>
                </div>

                <div className="w-full max-w-sm mx-auto">
                <a
                    href="/jobpreferfill"
                    className="block w-full text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 font-semibold transition"
                >
                    Berikutnya
                </a>
                </div>
            </div>

            {/* Kanan - Ilustrasi */}
            <div className="hidden md:flex w-1/2 bg-yellow-400 items-center justify-center">
                <img src="/skillfill-illustration.png" alt="Skill Illustration" className="max-w-[80%]" />
            </div>
        </div>
    );
};

export default SkillFill;
