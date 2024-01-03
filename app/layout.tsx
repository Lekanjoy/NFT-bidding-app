'use client'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/Header";
import {store} from '@/store/store';
import { Provider } from 'react-redux';
import { Web3Modal } from '@/context/Web3Modal';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='font-["Quicksand"]'>
        <Provider store={store}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Web3Modal>{children}</Web3Modal>
        </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
