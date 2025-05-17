export default function DashboardPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Job Matches Dashboard</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
            Filter
          </button>
          <button className="px-3 py-2 bg-indigo-600 rounded-lg text-white text-sm font-medium hover:bg-indigo-700 flex items-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New Job Alert
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-base font-semibold text-slate-700">Today's Matches</h3>
            <div className="p-2 bg-blue-50 rounded-lg transform transition-transform duration-300 group-hover:rotate-12">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-3xl font-bold text-slate-800">12</p>
            <div className="flex items-center ml-3 text-sm text-green-600 font-medium">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>3 new</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-1">Matches based on your profile</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-base font-semibold text-slate-700">Saved Jobs</h3>
            <div className="p-2 bg-indigo-50 rounded-lg transform transition-transform duration-300 group-hover:rotate-12">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-3xl font-bold text-slate-800">8</p>
            <div className="flex items-center ml-3 text-sm text-green-600 font-medium">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <span>1 new</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-1">Save jobs to review later</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-base font-semibold text-slate-700">Profile Match Score</h3>
            <div className="p-2 bg-green-50 rounded-lg transform transition-transform duration-300 group-hover:rotate-12">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-3xl font-bold text-slate-800">87%</p>
            <div className="flex items-center ml-3 text-sm text-green-600 font-medium">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>+5%</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-1">Higher score, better matches</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">Recent Job Matches</h3>
          <a href="#" className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View all</a>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((job) => (
              <div key={job} className="group bg-white hover:bg-slate-50 border border-slate-200 rounded-lg p-4 transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <span className="text-slate-700 font-medium">TC</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Senior Software Engineer</h4>
                        <p className="text-sm text-slate-600">TechCorp Inc. • Remote</p>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Salary Range</p>
                        <p className="text-sm font-medium text-slate-700">$120K - $150K</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Posted</p>
                        <p className="text-sm font-medium text-slate-700">2 days ago</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Applicants</p>
                        <p className="text-sm font-medium text-green-600">7 applicants</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex gap-2">
                        <span className="inline-block px-2 py-1 bg-slate-100 text-xs font-medium text-slate-600 rounded-md">React</span>
                        <span className="inline-block px-2 py-1 bg-slate-100 text-xs font-medium text-slate-600 rounded-md">Node.js</span>
                        <span className="inline-block px-2 py-1 bg-slate-100 text-xs font-medium text-slate-600 rounded-md">TypeScript</span>
                        <span className="inline-block px-2 py-1 bg-slate-100 text-xs font-medium text-slate-600 rounded-md">+2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full">
                      95% match
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <button className="px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 transition-all duration-200 transform hover:scale-105">
                        Save
                      </button>
                      <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 hover:shadow-md">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">Application Status</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-sm text-slate-600">Applied</span>
                </div>
                <span className="text-sm font-medium text-slate-800">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-slate-600">Interview</span>
                </div>
                <span className="text-sm font-medium text-slate-800">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-slate-600">Offer</span>
                </div>
                <span className="text-sm font-medium text-slate-800">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-slate-600">Hired</span>
                </div>
                <span className="text-sm font-medium text-slate-800">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-sm text-slate-600">Rejected</span>
                </div>
                <span className="text-sm font-medium text-slate-800">5</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">Upcoming Interviews</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-indigo-100 text-indigo-700 rounded-lg p-2 text-center min-w-[50px]">
                  <div className="text-xs font-medium">JUN</div>
                  <div className="text-xl font-bold">15</div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Frontend Developer</h4>
                  <p className="text-sm text-slate-600">Acme Inc. • 2:00 PM</p>
                  <p className="text-xs text-slate-500 mt-1">Virtual • Google Meet</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-indigo-100 text-indigo-700 rounded-lg p-2 text-center min-w-[50px]">
                  <div className="text-xs font-medium">JUN</div>
                  <div className="text-xl font-bold">17</div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Full Stack Engineer</h4>
                  <p className="text-sm text-slate-600">Tech Solutions • 11:00 AM</p>
                  <p className="text-xs text-slate-500 mt-1">Virtual • Zoom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}