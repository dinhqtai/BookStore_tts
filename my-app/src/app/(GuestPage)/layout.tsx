import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GuestLayout from '../components/Layout/Guest'
import SessionProvider from "../components/session"
import { getServerSession } from 'next-auth'
export const metadata: Metadata = {
  title: 'Web books',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className="bg-orange-100">
        <SessionProvider session={session}>
          <GuestLayout>
            {children}
          </GuestLayout>
        </SessionProvider>
      </body>
    </html>
  )
}
