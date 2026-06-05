import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HiOutlinePhone } from 'react-icons/hi2'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vision Ultimate Studio - Baby & Birthday Photography Ahmedabad',
  description: 'Patient, friendly photographers in Motera specializing in baby photoshoots & birthday photography. Beautiful setups, 4.9★ rated. Book today!',
  keywords: 'baby photography, birthday photography, maternity photoshoot, newborn photography, Ahmedabad photographer, milestone photography, family photography, baby photoshoot Motera',
  openGraph: {
    title: 'Vision Ultimate Studio - Baby & Birthday Photography Ahmedabad',
    description: 'Patient, friendly photographers in Motera specializing in baby photoshoots & birthday photography. Beautiful setups, 4.9★ rated. Book today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://visionultimate.studio',
    siteName: 'Vision Ultimate Studio',
    images: [
      {
        url: '/images/business-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Vision Ultimate Studio - Professional Baby Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision Ultimate Studio - Baby & Birthday Photography Ahmedabad',
    description: 'Patient, friendly photographers specializing in baby photoshoots & birthday photography. Beautiful setups, 4.9★ rated.',
    images: ['/images/business-1.jpg'],
  },
  alternates: {
    canonical: 'https://visionultimate.studio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F4E4C1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-white antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
          
          {/* WhatsApp Float Button */}
          <a
            href="https://wa.me/919173031325?text=Hello! I'm interested in booking a photoshoot session."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Chat on WhatsApp"
          >
            <HiOutlinePhone className="h-6 w-6 group-hover:animate-pulse" />
          </a>
        </div>
      </body>
    </html>
  )
}