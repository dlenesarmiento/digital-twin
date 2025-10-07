import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
           Diana Lene Sarmiento AI Twin
          </h1>
          <p className="text-center text-gray-600 mb-8">
          Leverage my AI-powered twin to explore solutions for your projects.
          </p>

          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>Inspired by Ed Donner "AI in Production" Udemy course. Stack: A serverless AWS app with a CloudFront/S3 frontend, API Gateway/Lambda backend, and Bedrock for AI. DevOps: Infrastructure is managed by Terraform, deployed via GitHub Actions, with remote state locking in S3/DynamoDB.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}