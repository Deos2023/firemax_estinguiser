

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ScrollToTopButton from "./component/ScrollToTopButton";
import "./globals.css";
import { Ephesis } from 'next/font/google'

const ephesis = Ephesis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ephesis',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={ephesis.variable} >
        <Navbar/>
        {children}
        <ScrollToTopButton/>
        <Footer/>
      </body>
    </html>
  );
}
