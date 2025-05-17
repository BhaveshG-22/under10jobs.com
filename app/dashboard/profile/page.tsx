export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
      
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Job Preferences</h3>
          <p className="text-sm text-gray-500">
            Update your job preferences to get better matches
          </p>
        </div>
        
        <div className="p-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  defaultValue="Software Engineer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  defaultValue="San Francisco, CA"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  id="job-type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="full-time"
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  id="experience"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="mid-level"
                >
                  <option value="entry-level">Entry Level</option>
                  <option value="mid-level">Mid Level</option>
                  <option value="senior">Senior</option>
                  <option value="executive">Executive</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  defaultValue="JavaScript, React, Node.js, TypeScript"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add skills separated by commas"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Salary Expectations
                </label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <input
                    type="number"
                    id="salary-min"
                    defaultValue="90000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="mx-2">-</span>
                  <span className="mr-2">$</span>
                  <input
                    type="number"
                    id="salary-max"
                    defaultValue="130000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Preferences
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}