import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SingIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'
import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-Bai-Jamjuree',
})

export const metadata: Metadata = {
  title: 'NWL Space',
  description:
    'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url('../assets/bg-stars.svg')] bg-cover px-28 py-16">
            {/* Brul */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
            {/* Sign in */}
            {isAuthenticated ? <Profile /> : <SingIn />}
            {/* Hero */}
            <Hero />
            {/* Copyright */}
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[url('../assets/bg-stars.svg')] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
