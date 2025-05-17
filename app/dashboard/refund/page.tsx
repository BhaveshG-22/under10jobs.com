export default function RefundPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Request a Refund</h2>
      
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Refund Policy</h3>
        </div>
        <div className="p-6">
          <div className="mb-6 text-gray-700">
            <p className="mb-4">
              We offer a 30-day money-back guarantee on all of our subscription plans. If you're not satisfied with our service for any reason, 
              you can request a full refund within 30 days of your purchase.
            </p>
            <p className="mb-4">
              To request a refund, please fill out the form below explaining your reason for the refund. 
              Our support team will review your request and process your refund within 3-5 business days.
            </p>
            <p>
              Please note that after the 30-day period, we do not provide refunds for remaining subscription time if you choose to cancel early. 
              Instead, your subscription will remain active until the end of your billing period.
            </p>
          </div>
          
          <form className="mt-8">
            <div className="mb-6">
              <label htmlFor="subscription" className="block text-sm font-medium text-gray-700 mb-1">
                Subscription Plan
              </label>
              <select
                id="subscription"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                defaultValue="pro"
              >
                <option value="pro">Pro Plan - $12/month</option>
                <option value="premium">Premium Plan - $29/month</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Refund
              </label>
              <select
                id="reason"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Please select a reason</option>
                <option value="not-satisfied">Not satisfied with the service</option>
                <option value="technical-issues">Experiencing technical issues</option>
                <option value="found-alternative">Found an alternative solution</option>
                <option value="too-expensive">Subscription is too expensive</option>
                <option value="not-enough-features">Missing features I need</option>
                <option value="other">Other reason</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="details"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please provide any additional information about your refund request..."
              ></textarea>
            </div>
            
            <div className="flex items-center mb-6">
              <input
                id="feedback"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="feedback" className="ml-2 block text-sm text-gray-700">
                I'm willing to provide feedback to help improve the service
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Refund Request
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Important Note
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                If you're experiencing technical issues with the service, our support team may be able to help resolve them. 
                Consider <a href="#" className="font-medium underline">contacting support</a> before requesting a refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}