import type { Metadata } from 'next'
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/Header";
import {store} from '@/store/store';
import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NFT-List-Bid',
  description: 'Bid for your favorite arts from different collections',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
