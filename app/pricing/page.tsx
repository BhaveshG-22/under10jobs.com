import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Choose the right plan for your job search needs
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
        {/* Free Plan */}
        <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Free</h2>
            <p className="mt-4 text-sm text-gray-500">Basic job alerts for casual job seekers</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
            <Link
              href="/auth/sign-up"
              className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            >
              Get started with Free
            </Link>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Weekly job alerts</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Basic job preferences</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Up to 3 saved jobs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-gray-50">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Pro</h2>
            <p className="mt-4 text-sm text-gray-500">Priority alerts for active job seekers</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$12</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
            <Link
              href="/auth/sign-up"
              className="mt-8 block w-full bg-blue-600 border border-blue-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
            >
              Get started with Pro
            </Link>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Daily job alerts</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Advanced job preferences</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Unlimited saved jobs</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Basic analytics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Premium</h2>
            <p className="mt-4 text-sm text-gray-500">Maximum alerts for serious job hunters</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$29</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
            <Link
              href="/auth/sign-up"
              className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            >
              Get started with Premium
            </Link>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Real-time job alerts</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Premium job preferences</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Unlimited saved jobs</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Advanced analytics</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">Priority support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}