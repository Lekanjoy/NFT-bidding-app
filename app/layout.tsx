import { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import ReduxProvider from "@/providers/ReduxProvider";
import { Web3Modal } from "@/context/Web3Modal";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import "./globals.css";

// Add metadata
const metadata: Metadata = {
  title: "NFT Bidding App",
  description: "A decentralized NFT marketplace built on Ethereum and upon the OpenSea API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='font-["Quicksand"]'>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <NextTopLoader showSpinner={false} shadow={false} />
            <Web3Modal>{children}</Web3Modal>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
