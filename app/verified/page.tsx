import Link from "next/link"

export default function VerifiedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">You&apos;re verified!</h1>
        <p className="text-gray-600 mb-6">Your account has been confirmed and you&apos;re now signed in.</p>
        <Link href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition">
          Go to Home
        </Link>
      </div>
    </div>
  )
}