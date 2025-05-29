import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md ">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-left mb-2">
        Selamat Datang Kembali!
      </h1>
      <p className="text-gray-600 text-sm text-left mb-8">
        Sign in untuk mengakses akunmu
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Alamat Email / Username
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ketik email / username"
            className="w-full px-4 py-3 rounded-lg bg-blue-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500 transition"
          />
        </div>

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

        <button type="submit" className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition">
          Sign In
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-8">
        Baru di JobMate?{' '}
        <a href="signup" className="font-medium text-blue-600 hover:text-blue-500">
          Daftar
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
