// src/app/layout.js
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Nabvar'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/contextapi/CartContext'
import { ToastContainer } from 'react-toastify'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Fashion Website Banner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider>
          <Navbar />
          <ToastContainer />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}