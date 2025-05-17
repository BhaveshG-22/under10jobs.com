import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 shadow-xl z-10 relative transition-all duration-300 ease-in-out">
        <div className="h-full bg-gradient-to-b from-blue-900 to-indigo-900 rounded-r-xl overflow-hidden animate-gradient">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="flex items-center justify-center h-8 w-8 bg-white text-blue-900 rounded-md mr-3 text-sm font-black">U10</span>
              Under10Jobs
            </h2>
          </div>
          
          <div className="px-4 py-2">
            <div className="bg-blue-800/30 rounded-lg p-3">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-blue-200 text-xs">Premium Member</p>
                </div>
              </div>
            </div>
          </div>
          
          <nav className="mt-6 px-3">
            <div className="text-blue-200 text-xs font-semibold px-3 mb-2">MENU</div>
            <ul className="space-y-1">
              <li>
                <Link 
                  href="/dashboard" 
                  className="flex items-center px-4 py-2.5 rounded-lg bg-white/10 text-white font-medium transition-all duration-200 hover:translate-x-1"
                >
                  <svg className="w-5 h-5 mr-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/profile" 
                  className="flex items-center px-4 py-2.5 rounded-lg text-blue-100 font-medium transition-all duration-200 hover:translate-x-1 hover:bg-white/10"
                >
                  <svg className="w-5 h-5 mr-3 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/saved" 
                  className="flex items-center px-4 py-2.5 rounded-lg text-blue-100 font-medium transition-all hover:bg-white/10"
                >
                  <svg className="w-5 h-5 mr-3 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  Saved Jobs
                </Link>
              </li>
              
              <div className="text-blue-200 text-xs font-semibold px-3 mt-6 mb-2">ANALYTICS</div>
              <li>
                <Link 
                  href="/dashboard/analytics" 
                  className="flex items-center px-4 py-2.5 rounded-lg text-blue-100 font-medium transition-all hover:bg-white/10"
                >
                  <svg className="w-5 h-5 mr-3 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                  </svg>
                  Analytics
                </Link>
              </li>
              
              <div className="text-blue-200 text-xs font-semibold px-3 mt-6 mb-2">ACCOUNT</div>
              <li>
                <Link 
                  href="/dashboard/billing" 
                  className="flex items-center px-4 py-2.5 rounded-lg text-blue-100 font-medium transition-all hover:bg-white/10"
                >
                  <svg className="w-5 h-5 mr-3 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Billing
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/refund" 
                  className="flex items-center px-4 py-2.5 rounded-lg text-blue-100 font-medium transition-all hover:bg-white/10"
                >
                  <svg className="w-5 h-5 mr-3 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
                  </svg>
                  Refund
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/settings" 
                  className="flex items-center px-4 py-2.5 rounded-lg text-blue-100 font-medium transition-all hover:bg-white/10"
                >
                  <svg className="w-5 h-5 mr-3 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="px-3 mt-10">
            <div className="bg-blue-800/30 rounded-lg p-4">
              <h3 className="text-white font-semibold text-sm mb-1">Upgrade to Pro</h3>
              <p className="text-blue-200 text-xs mb-3">Get more features and priority alerts</p>
              <button className="w-full py-2 bg-white text-blue-900 rounded-lg text-sm font-medium">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-slate-50">
        <header className="bg-white border-b border-slate-200">
          <div className="px-6 py-5 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
              <p className="text-sm text-slate-500 mt-1">Welcome back, John! Here's what's happening today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>
              </div>
              
              <div className="bg-slate-100 py-1.5 px-3 rounded-full flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-slate-700">John Doe</span>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          <div className="max-w-7xl mx-auto animate-fadeIn">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}