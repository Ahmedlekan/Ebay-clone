import type { Metadata } from 'next'
import {ToastContainer} from "react-toastify"
import 'react-toastify/ReactToastify.css'
import UserProvider from './context/user'
import CartProvider from './context/cart'
import Footer from '@/components/Footer'
import TopMenu from '@/components/TopMenu'
import MainHeader from '@/components/MainHeader'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ebay clone',
  description: 'Ebay clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <UserProvider>
          <CartProvider>
          <TopMenu />
          <MainHeader />
            {children}
            <Footer/>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  )
}
