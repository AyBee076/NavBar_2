export default function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="text-5xl mb-4">📧</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Check your email</h1>
        <p className="text-gray-600">
          We sent a confirmation link to your email. <br />
          Click the link to verify it&apos;s you and get signed in.
        </p>
      </div>
    </div>
  )
}