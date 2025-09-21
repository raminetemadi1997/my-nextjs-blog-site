import Link from 'next/link'

export default function ForbiddenPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">🚫 403</h1>
      <h2 className="text-3xl font-semibold mb-2">دسترسی ندارید</h2>
      <p className="text-center text-gray-600 mb-6">
        شما اجازه دسترسی به این صفحه را ندارید.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        بازگشت به خانه
      </Link>
    </div>
  )
}
