export default function BillingPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Billing & Subscription</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Current Plan</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-xl font-bold text-blue-600">Pro Plan</h4>
                <p className="text-gray-600">$12/month, billed monthly</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Active
              </span>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="font-medium mb-3">Plan Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Daily job alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced job preferences</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited saved jobs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Basic analytics</span>
                </li>
              </ul>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Upgrade Plan
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
        
        {/* Payment Method */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Payment Method</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="h-8 w-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 4H2c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h20c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H2V9h20v9zM2 6v1h20V6H2zm8 10h8v-2h-8v2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/2025</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  Default
                </span>
              </div>
            </div>
            
            <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Update Payment Method
            </button>
          </div>
        </div>
        
        {/* Billing History */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Billing History</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receipt
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { date: "May 1, 2023", desc: "Pro Plan - Monthly", amount: "$12.00", status: "Paid" },
                    { date: "Apr 1, 2023", desc: "Pro Plan - Monthly", amount: "$12.00", status: "Paid" },
                    { date: "Mar 1, 2023", desc: "Pro Plan - Monthly", amount: "$12.00", status: "Paid" },
                  ].map((invoice, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {invoice.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {invoice.desc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {invoice.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href="#" className="text-blue-600 hover:text-blue-500">
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}