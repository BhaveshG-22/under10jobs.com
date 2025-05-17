export default function AnalyticsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Job Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Jobs Viewed</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">147</p>
          <div className="mt-1 flex items-center text-sm text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>12% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Jobs Applied</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
          <div className="mt-1 flex items-center text-sm text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>8% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Interview Requests</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">7</p>
          <div className="mt-1 flex items-center text-sm text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>16% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Application Rate</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">16.3%</p>
          <div className="mt-1 flex items-center text-sm text-red-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>2% from last month</span>
          </div>
        </div>
      </div>
      
      {/* Job Applications Chart */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Job Applications Over Time</h3>
        </div>
        <div className="p-6">
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would be here</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Job Categories */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Top Job Categories</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[
                { category: "Software Development", count: 68, percent: 46 },
                { category: "Web Development", count: 42, percent: 29 },
                { category: "Data Science", count: 21, percent: 14 },
                { category: "DevOps", count: 16, percent: 11 },
              ].map((item, i) => (
                <li key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm font-medium text-gray-700">{item.count} jobs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Application Success Rate */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Application Success Rate</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeDasharray="29, 100"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-3xl font-bold text-gray-900">29%</div>
                  <div className="text-sm text-gray-500">Success</div>
                </div>
              </div>
            </div>
            
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Count
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Interview
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    7
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    29%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    42%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Rejected
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    7
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    29%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}