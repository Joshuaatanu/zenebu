"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [tab, setTab] = useState("rent");
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-[#2D1F13] flex flex-col overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="w-full absolute top-0 left-0 z-10 px-8 py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logotype.svg" alt="Estatery Logo" width={134} height={45} className="w-[134px] h-[45px] object-contain" priority />
        </div>
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-8">
            <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Rent</Link>
            <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Buy</Link>
            <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Sell</Link>
            <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Manage Property</Link>
            <Link href="#" className="text-white text-base font-medium hover:text-[#6C5DD3] transition">Contact Us</Link>
          </div>
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

      {/* Info Section: Tenants & Landlords */}
      <section className="relative w-full flex justify-center py-20 bg-[#F8F8FF]">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-4 md:px-0">
          {/* Left: House image with feature cards */}
          <div className="relative flex-1 flex justify-center items-center min-w-[320px]" style={{ minHeight: 320 }}>
            {/* Feature Cards - OUTSIDE image, overlapping */}
            <div className="absolute -top-8 left-1 z-20">
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 min-w-[200px]">
                <div className="w-10 h-10 bg-[#F0EEFF] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="#6C5DD3" strokeWidth="2" fill="#F0EEFF" />
                    <path d="M8 12h8M12 8v8" stroke="#6C5DD3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#6C5DD3]">Virtual home tour</div>
                  <div className="text-xs text-gray-500">We provide you with virtual tour</div>
                </div>
              </div>
            </div>
            <div className="relative w-[380px] h-[260px] rounded-2xl overflow-visible shadow-xl z-10">
              <img src="/house.png" alt="House" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute -bottom-8 right-1 z-20">
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 min-w-[200px]">
                <div className="w-10 h-10 bg-[#F0EEFF] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="#6C5DD3" strokeWidth="2" fill="#F0EEFF" />
                    <path d="M12 8v8M8 12h8" stroke="#6C5DD3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#6C5DD3]">Find the best deal</div>
                  <div className="text-xs text-gray-500">Browse thousands of properties</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Text and tabs */}
          <div className="flex-1 flex flex-col items-start max-w-xl">
            <div className="flex gap-2 mb-6">
              <button className="px-5 py-2 rounded-lg font-semibold text-white bg-[#6C5DD3] shadow">For tenants</button>
              <button className="px-5 py-2 rounded-lg font-semibold text-[#6C5DD3] bg-[#F0EEFF]">For landlords</button>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We make it easy for tenants and landlords.</h2>
            <p className="text-gray-600 mb-8">Whether it&apos;s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? You&apos;ll save a bunch of money and time with our services.</p>
            <button className="bg-[#6C5DD3] text-white px-8 py-3 rounded-lg font-semibold text-base shadow hover:bg-[#5847B6] transition">See more &rarr;</button>
          </div>
        </div>
      </section>

      {/* New way to find your new home section */}
      <section className="w-full flex justify-center py-16 bg-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-[#F8F8FF] rounded-2xl shadow-lg overflow-hidden">
          {/* Left: Text and stats */}
          <div className="flex-1 p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The new way to find your new home</h2>
            <p className="text-gray-600 mb-8">Find your dream place to live in with more than 10k+ properties listed.</p>
            <div className="flex gap-12 mb-2">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F0EEFF] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 6v6l4 2" stroke="#6C5DD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="#6C5DD3" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-gray-900">7.4%</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">Property Return Rate</div>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F0EEFF] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="7" y="9" width="4" height="6" rx="1" fill="#6C5DD3" />
                    <rect x="13" y="7" width="4" height="8" rx="1" fill="#6C5DD3" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-gray-900">3,856</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">Property in Sell & Rent</div>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F0EEFF] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="#6C5DD3" strokeWidth="2" />
                    <path d="M8 12h8M12 8v8" stroke="#6C5DD3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-gray-900">2,540</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">Daily Completed Transactions</div>
              </div>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center items-center p-8">
            <img src="/house-ill.png" alt="House Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Modern dark feature section */}
      <section className="w-full flex justify-center py-20 bg-[#181C32]">
        <div className="max-w-6xl w-full flex flex-col gap-12">
          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F4F7FE] mb-2">
                We make it easy for <span className="text-[#6C5DD3]">tenants</span> and <span className="text-[#A5A6F6]">landlords</span>.
              </h2>
            </div>
            <div className="max-w-xl text-[#A3AED0] text-base">
              Whether it&apos;s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you&apos;ll save a bunch of money and time with our services.
            </div>
          </div>
          {/* Feature cards */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            {/* Card 1 */}
            <div className="flex-1 bg-[#232B50] rounded-xl p-6 flex flex-col gap-2 shadow-lg">
              <div className="w-10 h-10 bg-[#F0EEFF] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="4" fill="#F0EEFF" stroke="#6C5DD3" strokeWidth="2" />
                  <path d="M8 16v-4m4 4V8m4 8v-2" stroke="#6C5DD3" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-semibold text-[#F4F7FE] text-lg mb-1">Virtual home tour</div>
              <div className="text-[#A3AED0] text-sm">You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</div>
            </div>
            {/* Card 2 (highlighted) */}
            <div className="flex-1 bg-white rounded-xl p-6 flex flex-col gap-2 shadow-lg">
              <div className="w-10 h-10 bg-[#F0EEFF] rounded-lg flex items-center justify-center mb-3 relative">
                <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="4" fill="#F0EEFF" stroke="#6C5DD3" strokeWidth="2" />
                  <rect x="7" y="10" width="3" height="5" rx="1" fill="#6C5DD3" />
                  <rect x="13" y="7" width="4" height="8" rx="1" fill="#6C5DD3" />
                </svg>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#6C5DD3] rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className="font-semibold text-[#6C5DD3] text-lg mb-1">Find the best deal</div>
              <div className="text-[#6C5DD3] text-sm">Browse thousands of properties, save your favorites and set up search alerts so you don&apos;t miss the best home deal!</div>
            </div>
            {/* Card 3 */}
            <div className="flex-1 bg-[#232B50] rounded-xl p-6 flex flex-col gap-2 shadow-lg">
              <div className="w-10 h-10 bg-[#F0EEFF] rounded-lg flex items-center justify-center mb-3 relative">
                <svg className="w-6 h-6 text-[#6C5DD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="4" fill="#F0EEFF" stroke="#6C5DD3" strokeWidth="2" />
                  <path d="M12 8v8m0 0c-1.5 0-2.5-1-2.5-2.5S10.5 11 12 11s2.5 1 2.5 2.5S13.5 16 12 16z" stroke="#6C5DD3" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#6C5DD3] rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 12l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="font-semibold text-[#F4F7FE] text-lg mb-1">Get ready to apply</div>
              <div className="text-[#A3AED0] text-sm">Find your dream house? You just need to do a little to no effort and you can start fast move in to your dream home!</div>
            </div>
          </div>
          {/* Stats row */}
          <div className="flex flex-row justify-center items-center gap-0 border-t border-[#232B50] pt-8">
            {/* Stat 1 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-2xl font-bold text-[#F4F7FE] mb-1">7.4%</div>
              <div className="text-[#A3AED0] text-sm">Property Return Rate</div>
            </div>
            <div className="w-px h-8 bg-[#232B50] mx-8" />
            {/* Stat 2 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-2xl font-bold text-[#F4F7FE] mb-1">3,856</div>
              <div className="text-[#A3AED0] text-sm">Property in Sell & Rent</div>
            </div>
            <div className="w-px h-8 bg-[#232B50] mx-8" />
            {/* Stat 3 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-2xl font-bold text-[#F4F7FE] mb-1">2,540</div>
              <div className="text-[#A3AED0] text-sm">Daily Completed Transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Based on your location section */}
      <section className="w-full flex justify-center py-20 bg-[#FCFCFF]">
        <div className="max-w-6xl w-full flex flex-col items-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Based on your location</h2>
          <p className="text-gray-500 mb-8 text-center">Some of our picked properties near your location.</p>
          {/* Tabs and search */}
          <div className="w-full flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="flex gap-2">
              <button className="px-6 py-2 rounded-lg font-semibold text-white bg-[#6C5DD3] shadow border border-[#6C5DD3]">Rent</button>
              <button className="px-6 py-2 rounded-lg font-semibold text-[#6C5DD3] bg-white border border-[#E5E7EB]">Buy</button>
              <button className="px-6 py-2 rounded-lg font-semibold text-[#6C5DD3] bg-white border border-[#E5E7EB]">Sell</button>
            </div>
            <div className="flex-1 flex justify-end">
              <input type="text" placeholder="Search..." className="w-full md:w-72 px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]" />
            </div>
          </div>
          {/* Property cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 w-full bg-gray-200">
                <img src="/house.png" alt="Palm Harbor" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#6C5DD3] text-white text-xs font-semibold px-3 py-1 rounded-lg">POPULAR</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-[#6C5DD3]">$2,095</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <button className="ml-auto text-[#6C5DD3] hover:text-[#5847B6]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Palm Harbor</div>
                <div className="text-gray-500 text-sm mb-3">2699 Green Valley, Highland Lake, FL</div>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>3 Beds</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>2 Bathrooms</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /></svg>5x7 m²</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 w-full bg-gray-200">
                <img src="/house.png" alt="Beverly Springfield" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#6C5DD3] text-white text-xs font-semibold px-3 py-1 rounded-lg">POPULAR</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-[#6C5DD3]">$2,700</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <button className="ml-auto text-[#6C5DD3] hover:text-[#5847B6]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Beverly Springfield</div>
                <div className="text-gray-500 text-sm mb-3">2821 Lake Sevilla, Palm Harbor, TX</div>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>4 Beds</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>2 Bathrooms</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /></svg>6x7.5 m²</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 w-full bg-gray-200">
                <img src="/house.png" alt="Faulkner Ave" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#6C5DD3] text-white text-xs font-semibold px-3 py-1 rounded-lg">POPULAR</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-[#6C5DD3]">$4,550</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <button className="ml-auto text-[#6C5DD3] hover:text-[#5847B6]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Faulkner Ave</div>
                <div className="text-gray-500 text-sm mb-3">909 Woodland St, Michigan, IN</div>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>4 Beds</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>4 Bathrooms</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /></svg>8x10 m²</span>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 w-full bg-gray-200">
                <img src="/house.png" alt="St. Crystal" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2"></div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-[#6C5DD3]">$2,400</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <button className="ml-auto text-[#6C5DD3] hover:text-[#5847B6]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="font-semibold text-gray-900 mb-1">St. Crystal</div>
                <div className="text-gray-500 text-sm mb-3">210 US Highway, Highland Lake, FL</div>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>4 Beds</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>6 Bathrooms</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /></svg>6x8 m²</span>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 w-full bg-gray-200">
                <img src="/house.png" alt="Cove Red" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2"></div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-[#6C5DD3]">$1,500</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <button className="ml-auto text-[#6C5DD3] hover:text-[#5847B6]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Cove Red</div>
                <div className="text-gray-500 text-sm mb-3">243 Curlew Road, Palm Harbor, TX</div>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>3 Beds</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>1 Bathroom</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /></svg>5x7.5 m²</span>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 w-full bg-gray-200">
                <img src="/house.png" alt="Tarpon Bay" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2"></div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-[#6C5DD3]">$1,600</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <button className="ml-auto text-[#6C5DD3] hover:text-[#5847B6]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Tarpon Bay</div>
                <div className="text-gray-500 text-sm mb-3">103 Lake Shores, Michigan, IN</div>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>4 Beds</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>5 Bathrooms</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /></svg>7x10 m²</span>
                </div>
              </div>
            </div>
          </div>
          {/* Browse more button */}
          <button className="mt-4 px-8 py-3 bg-[#181C32] text-white rounded-lg font-semibold text-base shadow hover:bg-[#6C5DD3] transition">Browse more properties</button>
        </div>
      </section>

      {/* Landlord subscribe section */}
      <section className="relative w-screen h-[499px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex items-center justify-center overflow-hidden bg-transparent" style={{ maxWidth: '100vw' }}>
        <img src="/brown.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
          <div className="uppercase tracking-widest text-xs text-white/70 mb-2">Keep updated</div>
          <h2 className="text-lg md:text-2xl font-semibold text-white mb-2">ARE YOU A LANDLORD?</h2>
          <p className="text-white/80 mb-6 text-sm">Join 10,000+ other landlords in our estatery community.</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none w-full sm:w-auto min-w-[200px]" />
            <button type="submit" className="px-6 py-2 rounded bg-white text-[#181C32] font-semibold uppercase tracking-wide hover:bg-gray-100 transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#181818] text-white pt-20 pb-16 px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-12">
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink md:min-w-0 justify-center md:justify-start w-full md:w-auto mb-10 md:mb-0">
            <Image src="/logotype.svg" alt="Estatery Logo" width={469} height={136} className="max-w-full h-auto object-contain" />
          </div>
          {/* Footer Columns */}
          <div className="w-full flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12">
            {/* Sell a Home */}
            <div>
              <div className="font-semibold mb-4 text-base tracking-wide">SELL A HOME</div>
              <ul className="space-y-3 text-[#B0B0B0] text-base">
                <li><a href="#">Request an offer</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Stories</a></li>
              </ul>
              <div className="font-semibold mt-8 mb-4 text-base tracking-wide">BUY A HOME</div>
              <ul className="space-y-3 text-[#B0B0B0] text-base">
                <li><a href="#">Buy</a></li>
                <li><a href="#">Finance</a></li>
              </ul>
            </div>
            {/* Buy, Rent and Sell */}
            <div>
              <div className="font-semibold mb-4 text-base tracking-wide">BUY, RENT AND SELL</div>
              <ul className="space-y-3 text-[#B0B0B0] text-base">
                <li><a href="#">Buy and sell properties</a></li>
                <li><a href="#">Rent home</a></li>
                <li><a href="#">Builder trade-up</a></li>
              </ul>
            </div>
            {/* Terms & Privacy */}
            <div>
              <div className="font-semibold mb-4 text-base tracking-wide">TERMS & PRIVACY</div>
              <ul className="space-y-3 text-[#B0B0B0] text-base">
                <li><a href="#">Trust & Safety</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            {/* About */}
            <div>
              <div className="font-semibold mb-4 text-base tracking-wide">ABOUT</div>
              <ul className="space-y-3 text-[#B0B0B0] text-base">
                <li><a href="#">Company</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <div className="font-semibold mb-4 text-base tracking-wide">RESOURCES</div>
              <ul className="space-y-3 text-[#B0B0B0] text-base">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
