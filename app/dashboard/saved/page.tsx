export default function SavedJobsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Saved Jobs</h2>
      
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Your Saved Jobs</h3>
          <p className="text-sm text-gray-500">
            You can save up to 25 jobs with your current plan
          </p>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((job) => (
              <div key={job} className="border-b pb-6 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Senior Frontend Developer</h4>
                    <p className="text-gray-600 text-sm">TechCorp Inc. • San Francisco, CA</p>
                    <p className="text-gray-500 text-sm mt-1">
                      $120K - $150K • Saved 3 days ago • 
                      <span className="text-green-600 font-medium"> 6 applicants</span>
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Next.js</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">GraphQL</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-3">
                      We're looking for an experienced Frontend Developer to join our growing team. You'll be responsible for building and maintaining our web applications...
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Apply Now
                    </button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}