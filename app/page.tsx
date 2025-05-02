"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [tab, setTab] = useState("rent");
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-[#2D1F13] flex flex-col">
      {/* Top Navigation Bar */}
      <header className="w-full absolute top-0 left-0 z-10 px-8 py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#6C5DD3] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white ml-2">Estatery</span>
        </div>
        <nav className="hidden md:flex gap-8 ml-16">
          <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Rent</Link>
          <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Buy</Link>
          <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Sell</Link>
          <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Manage Property</Link>
          <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Contact Us</Link>
        </nav>
        <div className="flex gap-4 items-center ml-auto">
          <Link href="/login" className="px-7 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#6C5DD3] transition">Login</Link>
          <Link href="/signup" className="px-7 py-2 rounded-full bg-[#6C5DD3] text-white font-medium hover:bg-[#5847B6] transition">Sign up</Link>
        </div>
      </header>

      {/* Hero Section with background */}
      <section className="relative w-full min-h-[80vh] pt-32 pb-16 px-4 md:px-0">
        {/* Background image overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.png"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-start">
          {/* Left: Headline and search */}
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-xl">
              Buy, rent, or sell your property easily
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-lg">
              A great platform to buy, sell, or even rent your properties without any commissions.
            </p>
            {/* Centered container for card and stats */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-2xl">
                {/* Search/Filter Card */}
                <div className="bg-white rounded-2xl shadow-lg px-8 py-6 w-full flex flex-col gap-2">
                  {/* Tabs Row */}
                  <div className="flex gap-10 mb-3">
                    {['rent', 'buy', 'sell'].map((t) => (
                      <button
                        key={t}
                        className={`text-base font-medium capitalize border-b-2 transition-colors pb-1 ${tab === t ? 'border-[#6C5DD3] text-[#6C5DD3] font-bold' : 'border-transparent text-black'}`}
                        onClick={() => setTab(t)}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                  {/* Fields Row */}
                  <div className="flex items-center w-full gap-6">
                    {/* Location */}
                    <div className="flex flex-col min-w-[170px]">
                      <span className="block text-xs font-medium text-gray-500 mb-1">Location</span>
                      <span className="text-lg font-bold text-black">Barcelona, Spain</span>
                    </div>
                    {/* Divider */}
                    <div className="h-10 w-px bg-gray-200" />
                    {/* When */}
                    <div className="flex flex-col min-w-[170px]">
                      <span className="block text-xs font-medium text-gray-500 mb-1">When</span>
                      <span className="text-lg font-bold text-black flex items-center gap-2">Select Move-in Date
                        <svg className="w-4 h-4 text-gray-400 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                      </span>
                    </div>
                    {/* Button */}
                    <div className="flex-1 flex justify-end">
                      <button
                        className="bg-[#6C5DD3] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-[#5847B6] transition whitespace-nowrap h-[56px] flex items-center justify-center"
                        onClick={() => router.push('/login')}
                      >
                        Browse Properties
                      </button>
                    </div>
                  </div>
                </div>
                {/* Stats/Features Row */}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
