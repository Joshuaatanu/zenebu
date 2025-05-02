'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
        <div className="w-full max-w-[440px]">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-14">
            <div className="w-9 h-9 bg-[#6C5DD3] rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-[22px] font-bold text-gray-900">Estatery</h2>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-[34px] font-bold text-gray-900 mb-3">Welcome back</h1>
            <p className="text-[17px] text-gray-600">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-7" onSubmit={e => { e.preventDefault(); router.push('/dashboard'); }}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-[15px] font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="hi@example.com"
                className="w-full px-4 py-[14px] border border-gray-300 rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-[15px] font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Enter password"
                  className="w-full px-4 py-[14px] border border-gray-300 rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent pr-12 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-[15px] font-medium text-[#6C5DD3] hover:text-[#5B4EC2] transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-[14px] px-4 bg-[#6C5DD3] hover:bg-[#5B4EC2] text-white rounded-xl text-[15px] font-medium transition-colors"
            >
              Login
            </button>

            {/* Google Login Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-[14px] px-4 border border-gray-300 rounded-xl text-[15px] font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M23.766 12.2764c0-.9175-.07-1.7163-.2135-2.5375H12.24v4.7511h6.4871c-.2781 1.4976-1.1376 2.7644-2.4173 3.6115v3.0012h3.9173c2.295-2.1076 3.6128-5.2107 3.6128-8.8263z" fill="#4285F4"/>
                <path d="M12.2401 24c3.2728 0 6.0229-1.0854 8.0316-2.9239l-3.9173-3.0012c-1.0854.7282-2.4746 1.1593-4.1143 1.1593-3.1617 0-5.8395-2.1338-6.7942-4.9957H1.3472v3.0984C3.3392 21.2643 7.4774 24 12.2401 24z" fill="#34A853"/>
                <path d="M5.4459 14.2333c-.2427-.7282-.3819-1.5076-.3819-2.3107s.1392-1.5825.3819-2.3107V6.5135H1.3472C.4823 8.2514 0 10.2677 0 12.3226s.4823 4.0712 1.3472 5.8091l4.0987-3.0984z" fill="#FBBC05"/>
                <path d="M12.2401 4.9177c1.7892 0 3.3932.6149 4.6561 1.8204l3.4744-3.4744C18.2559 1.2587 15.506 0 12.2401 0 7.4774 0 3.3392 2.7357 1.3472 6.5135l4.0987 3.0984c.9547-2.8619 3.6325-4.6942 6.7942-4.6942z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-[15px] text-gray-600">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-medium text-[#6C5DD3] hover:text-[#5B4EC2] transition-colors">
                  Sign up for free
                </Link>
              </p>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-10 text-center text-xs text-gray-500">
            <p>
              You agree to Estatery&apos;s{' '}
              <Link href="/terms" className="text-[#6C5DD3] hover:text-[#5B4EC2] transition-colors">Terms of Use</Link>
              {' & '}
              <Link href="/privacy" className="text-[#6C5DD3] hover:text-[#5B4EC2] transition-colors">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Property Preview */}
      <div className="hidden lg:block w-[45%] bg-[#F8F7FF] p-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0EEFF] to-[#E3E0FF] flex items-center justify-center">
                <svg className="w-24 h-24 text-[#6C5DD3] opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="absolute top-4 left-4 bg-[#6C5DD3] text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                POPULAR
              </div>
              <button className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Beverly Springfield</h3>
              <p className="text-gray-600 mb-6">2821 Sevilla, Palm Harbor, TX</p>
              <div className="flex items-center gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-600">4 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-gray-600">2 Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span className="text-gray-600">6x7.5m²</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">Rent Sale</span>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-[#6C5DD3]">$2,700</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-[#6C5DD3] text-white rounded-xl font-medium hover:bg-[#5B4EC2] transition-colors">
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 