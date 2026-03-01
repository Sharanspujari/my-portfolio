import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sharanappa Pujari - Frontend Next.js Developer',
  description: 'Experienced Frontend Developer specializing in React.js, Next.js, and modern web technologies. 3+ years building high-performance web applications.',
  keywords: ['Frontend Developer', 'React.js', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Sharanappa Pujari' }],
  openGraph: {
    title: 'Sharanappa Pujari - Frontend Next.js Developer',
    description: 'Experienced Frontend Developer specializing in React.js and Next.js',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
