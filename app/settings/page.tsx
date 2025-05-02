'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [displayName, setDisplayName] = useState('John');
  const [fullName, setFullName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('+1 234-567-8900');

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 md:p-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Section */}
            <div className="md:col-span-2 bg-white rounded-2xl p-6 border">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile</h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-[#6C5DD3] text-white flex items-center justify-center text-2xl font-bold">
                  JD
                </div>
                <div>
                  <button className="text-[#6C5DD3] hover:text-[#5A4DB8] font-medium">
                    Change Avatar
                  </button>
                  <p className="text-sm text-gray-500 mt-1">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                  <input 
                    type="text" 
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    value="john.doe@example.com"
                    disabled
                    className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-500" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="flex">
                    <button className="px-3 py-2 border border-r-0 rounded-l-lg bg-white flex items-center gap-2">
                      <span className="text-sm text-gray-600">US</span>
                      <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <input 
                      type="tel" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]" 
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-[#6C5DD3] text-white px-6 py-2 rounded-lg hover:bg-[#5A4DB8] transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-2xl p-6 border">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Password</h3>
                  <button className="text-[#6C5DD3] hover:text-[#5A4DB8] font-medium">
                    Change Password
                  </button>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Two-Factor Authentication</h3>
                  <button className="text-[#6C5DD3] hover:text-[#5A4DB8] font-medium">
                    Enable 2FA
                  </button>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Linked Accounts</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <button className="w-8 h-8 rounded-full bg-[#F0EEFF] flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#6C5DD3]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#F0EEFF] flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#6C5DD3]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="md:col-span-3 bg-white rounded-2xl p-6 border">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
              
              <div className="space-y-8">
                {/* Property Updates */}
                <div>
                  <h3 className="text-base font-medium text-gray-800 mb-4">Property Updates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">New Property Matches</p>
                        <p className="text-sm text-gray-500">Get notified when new properties match your search criteria</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#6C5DD3] transition-colors focus:outline-none">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Price Changes</p>
                        <p className="text-sm text-gray-500">Receive updates when saved properties change in price</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none hover:bg-gray-300">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Status Updates</p>
                        <p className="text-sm text-gray-500">Get notified when saved properties change status</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#6C5DD3] transition-colors focus:outline-none">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages & Communication */}
                <div className="pt-6 border-t">
                  <h3 className="text-base font-medium text-gray-800 mb-4">Messages & Communication</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Direct Messages</p>
                        <p className="text-sm text-gray-500">Receive notifications for new messages</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#6C5DD3] transition-colors focus:outline-none">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Viewing Requests</p>
                        <p className="text-sm text-gray-500">Get notified about property viewing requests</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#6C5DD3] transition-colors focus:outline-none">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing & Promotions */}
                <div className="pt-6 border-t">
                  <h3 className="text-base font-medium text-gray-800 mb-4">Marketing & Promotions</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Newsletter</p>
                        <p className="text-sm text-gray-500">Receive our monthly newsletter with market insights</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none hover:bg-gray-300">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Special Offers</p>
                        <p className="text-sm text-gray-500">Get notified about special deals and promotions</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none hover:bg-gray-300">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 