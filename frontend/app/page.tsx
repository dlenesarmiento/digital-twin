import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
           Diana Lene Sarmiento's AI Twin
          </h1>
          <p className="text-center text-gray-600 mb-8">
          Leverage my AI-powered twin to explore solutions for your projects.
          </p>

          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>The frontend is using is a Next.js application distributed globally by Amazon CloudFront. It communicates with a FastAPI backend running on AWS Lambda and exposed via Amazon API Gateway. The core AI is powered by Amazon Bedrock, with conversation memory persisted in Amazon S3. The entire infrastructure is defined as code with Terraform and deployed automatically through GitHub Actions.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}