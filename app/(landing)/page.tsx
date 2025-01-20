import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/dashboard">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Dashboard
        </button>
      </Link>
    </div>
  )
}

export default LandingPage
