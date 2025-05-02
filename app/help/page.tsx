'use client';

import Sidebar from '../components/Sidebar';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 md:p-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>
          <div className="bg-white rounded-2xl p-8 border text-gray-500 text-center">
            [Help and support content goes here]
          </div>
        </main>
      </div>
    </div>
  );
} 