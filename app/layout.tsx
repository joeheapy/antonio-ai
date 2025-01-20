import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <div className="flex justify-end items-center gap-4 p-4">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 font-semibold text-sm bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-end items-center gap-4 p-4">
                <SignOutButton>
                  <button className="px-4 py-2 font-semibold text-sm bg-violet-600 text-white rounded-lg shadow-sm hover:bg-red-700 transition-colors duration-200">
                    Sign Out
                  </button>
                </SignOutButton>
                <UserButton />
              </div>
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
