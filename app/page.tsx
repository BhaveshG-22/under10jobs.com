import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ color: 'var(--gray-900)' }}>
          <span className="block">Get noticed by recruiters with</span>
          <span className="block" style={{ color: 'var(--blue-600)' }}>Under10Jobs</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{ color: 'var(--gray-700)' }}>
          Apply to jobs with fewer than 10 applicants and increase your chances of getting noticed. 
          Set your preferences and get alerts when matching low-competition jobs appear.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="rounded-md shadow">
            <Link href="/auth/sign-up" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10" style={{ backgroundColor: 'var(--blue-700)' }}>
              Get started
            </Link>
          </div>
          <div className="ml-3 rounded-md shadow">
            <Link href="/pricing" className="w-full flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-medium rounded-md bg-white md:py-4 md:text-lg md:px-10" style={{ color: 'var(--blue-700)' }}>
              View pricing
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-2xl font-extrabold text-center" style={{ color: 'var(--gray-900)' }}>
          How it works
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-lg font-medium" style={{ color: 'var(--gray-900)' }}>1. Set Your Preferences</h3>
            <p className="mt-2 text-base" style={{ color: 'var(--gray-700)' }}>
              Tell us your desired job title, location, and experience level.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium" style={{ color: 'var(--gray-900)' }}>2. Get Notified</h3>
            <p className="mt-2 text-base" style={{ color: 'var(--gray-700)' }}>
              Receive alerts when jobs with fewer than 10 applicants match your profile.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium" style={{ color: 'var(--gray-900)' }}>3. Apply Early</h3>
            <p className="mt-2 text-base" style={{ color: 'var(--gray-700)' }}>
              Be among the first to apply and stand out from the crowd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
