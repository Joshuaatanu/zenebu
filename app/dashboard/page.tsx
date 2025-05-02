'use client';

import Sidebar from '../components/Sidebar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 md:p-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border flex flex-col items-center">
              <div className="text-sm text-gray-500 mb-1">Total Properties</div>
              <div className="text-2xl font-bold text-gray-900">78</div>
              <div className="text-xs text-green-600 font-semibold mt-1">+2.8%</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border flex flex-col items-center">
              <div className="text-sm text-gray-500 mb-1">Occupancy Rate</div>
              <div className="text-2xl font-bold text-gray-900">92%</div>
              <div className="text-xs text-green-600 font-semibold mt-1">+1.2%</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border flex flex-col items-center">
              <div className="text-sm text-gray-500 mb-1">Monthly Revenue</div>
              <div className="text-2xl font-bold text-gray-900">$45,600</div>
              <div className="text-xs text-green-600 font-semibold mt-1">+5.4%</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
            <div className="h-64 flex items-center justify-center text-gray-400 border rounded-xl bg-gradient-to-b from-[#F8F8FF] to-white">
              [Chart Placeholder]
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Recent Properties</h3>
              <ul className="divide-y divide-gray-100">
                <li className="py-2 flex justify-between"><span>123 Main St</span><span className="font-bold text-green-600">$2,500</span></li>
                <li className="py-2 flex justify-between"><span>456 Park Ave</span><span className="font-bold text-green-600">$2,200</span></li>
                <li className="py-2 flex justify-between"><span>789 Oak Dr</span><span className="font-bold text-green-600">$2,000</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Maintenance Requests</h3>
              <ul className="divide-y divide-gray-100">
                <li className="py-2 flex justify-between"><span>Plumbing Issue</span><span className="text-yellow-500">Pending</span></li>
                <li className="py-2 flex justify-between"><span>HVAC Repair</span><span className="text-green-500">Completed</span></li>
                <li className="py-2 flex justify-between"><span>Paint Job</span><span className="text-blue-500">In Progress</span></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 