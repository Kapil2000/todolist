import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To Do List',
  description: 'Generated by create next app',
  icons:{
  icon:[
    '/fevicon.ico?v=4'
  ],
  apple:[
    '/apple-touch-icon.png?v=4'
  ],
  shortcut:[
    '/apple-touch-icon.png'
  ]
},
mainfest: '/site-webmainfest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
