import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUpForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Please check your email to activate your account');
  };


  return (
    <>
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md mb-24 md:mb-32">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-left mb-2">
        Sign Up
      </h1>
      <p className="text-gray-600 text-sm text-left mb-8">
        Buat Akun Baru
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          { label: "Nama Lengkap", name: "fullname", placeholder: "Ketik Nama Lengkap" },
          { label: "Alamat Email", name: "email", placeholder: "Ketik Alamat Email", type: "email" },
          { label: "Nomor Telepon", name: "phone", placeholder: "Ketik Nomor Telepon" },
          { label: "Address", name: "address", placeholder: "Type your address" },
          { label: "Username", name: "username", placeholder: "Type your username" },
        ].map((field, idx) => (
          <div key={idx}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full px-4 py-2 rounded-lg bg-blue-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition"
            />
          </div>
        ))}

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Ketik password"
              className="w-full px-4 py-3 pr-12 rounded-lg bg-blue-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:text-blue-500 focus:outline-none"
            >
            <img
            src={showPassword ? '/pass-hide.png' : '/pass-reveal.png'}
            alt="Toggle Password"
            className="w-5 h-5"
            />
            </button>
          </div>
        </div>

        <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
        </label>
        <div className="relative">
            <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Ketik password"
            className="w-full px-4 py-3 pr-12 rounded-lg bg-blue-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition"
            />
            <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none"
            >
            <img
                src={showConfirmPassword ? '/pass-hide.png' : '/pass-reveal.png'}
                alt="Toggle Confirm Password"
                className="w-5 h-5"
            />
            </button>
        </div>
        </div>


        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-6">
        Sudah Punya Akun?{' '}
        <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
          Masuk
        </a>
      </p>
    </div>
    <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default SignUpForm;
