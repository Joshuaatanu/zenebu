'use client';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function PropertyDetailsPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Property Details" />
        <main className="flex-1 p-6 md:p-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h1>
          <div className="bg-white rounded-2xl p-8 border text-gray-500 text-center">
            [Property details content goes here]
          </div>
        </main>
      </div>
    </div>
  );
} 