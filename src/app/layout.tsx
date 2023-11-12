import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {useState} from 'react'

const poppins = Poppins({ 
  weight: ['400','500','600'],
  subsets: ['latin'], 
})

export const metadata: Metadata = {
  title: 'Comercializadora Arvien',
  description: 'Comercializadora Arvien',
  keywords: 'comercializadora,farmaceuticos,insumos,salud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://bootswatch.com/5/lux/bootstrap.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>
        
      </head>
      <body className={`${poppins.className}`}>
          <Navigation/>
        <div>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
