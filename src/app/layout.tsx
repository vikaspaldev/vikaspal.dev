import { ExternalScripts } from '@/components/ExternalScripts/ExternalScripts'
import React from 'react'
import './globals.css'

export interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <ExternalScripts />

        {children}
      </body>
    </html>
  )
}

export default RootLayout
