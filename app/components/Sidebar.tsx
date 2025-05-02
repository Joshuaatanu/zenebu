'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z" />
      </svg>
    ), label: 'Dashboard' },
  { href: '/dashboard/stats', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ), label: 'Stats' },
  { href: '/properties', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ), label: 'Properties' },
  { href: '/messages', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ), label: 'Messages' },
  { href: '/help', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ), label: 'Help' },
  { href: '/settings', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.01c1.527-.878 3.276.87 2.398 2.398a1.724 1.724 0 001.01 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.01 2.573c.878 1.527-.87 3.276-2.398 2.398a1.724 1.724 0 00-2.572 1.01c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.01c-1.527.878-3.276-.87-2.398-2.398a1.724 1.724 0 00-1.01-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.01-2.573c-.878-1.527.87-3.276 2.398-2.398.996.574 2.146.574 3.142 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ), label: 'Settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="hidden md:flex flex-col bg-white border-r min-h-screen w-[280px] py-6 transition-all duration-300 ease-in-out group hover:shadow-lg">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-bold text-gray-900">Oyin</h1>
        <p className="text-sm text-gray-500">Property Management</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group/item
                ${isActive 
                  ? 'bg-[#F0EEFF] text-[#6C5DD3]' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#6C5DD3]'
                }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6C5DD3]"></span>
              )}
            </Link>
          );
        })}

        <div className="pt-8 mt-8 border-t">
          <Link href="/settings" className="flex items-center px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer hover:bg-gray-50 group">
            <div className="w-8 h-8 rounded-full bg-[#6C5DD3] text-white flex items-center justify-center text-sm font-medium">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 group-hover:text-[#6C5DD3]">John Doe</p>
              <p className="text-xs text-gray-500">Property Manager</p>
            </div>
          </Link>
        </div>
      </nav>
    </aside>
  );
} 