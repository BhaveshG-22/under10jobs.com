import { NextResponse } from 'next/server';

// This is a mock API route that returns job matches
export async function GET(request: Request) {
  // In a real implementation, we would:
  // 1. Get user ID from authenticated session
  // 2. Get user preferences from database
  // 3. Query jobs from database based on preferences
  // 4. Filter jobs with fewer than 10 applicants
  // 5. Return the filtered jobs

  // Mock data for demonstration
  const mockJobs = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA (Remote)',
      description: 'We\'re looking for a senior software engineer to join our team...',
      salary: '$120K - $150K',
      applicants: 7,
      tags: ['React', 'Node.js', 'TypeScript'],
      postedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      url: 'https://example.com/job/1'
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'WebDesign Co.',
      location: 'New York, NY',
      description: 'Join our creative team building beautiful web experiences...',
      salary: '$90K - $110K',
      applicants: 4,
      tags: ['JavaScript', 'React', 'CSS'],
      postedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      url: 'https://example.com/job/2'
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      company: 'CloudScale',
      location: 'Remote',
      description: 'Looking for a DevOps engineer to improve our infrastructure...',
      salary: '$100K - $130K',
      applicants: 3,
      tags: ['AWS', 'Kubernetes', 'CI/CD'],
      postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      url: 'https://example.com/job/3'
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'DataInsights',
      location: 'Boston, MA',
      description: 'Join our team working on cutting-edge machine learning projects...',
      salary: '$110K - $140K',
      applicants: 6,
      tags: ['Python', 'Machine Learning', 'SQL'],
      postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      url: 'https://example.com/job/4'
    },
    {
      id: '5',
      title: 'Product Manager',
      company: 'ProductHub',
      location: 'Seattle, WA',
      description: 'Lead our product development efforts for our SaaS platform...',
      salary: '$130K - $160K',
      applicants: 9,
      tags: ['Product Management', 'SaaS', 'Agile'],
      postedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      url: 'https://example.com/job/5'
    }
  ];

  // Optional: Parse query parameters for filtering or pagination
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '10');
  
  return NextResponse.json({
    success: true,
    data: mockJobs.slice(0, limit)
  });
}