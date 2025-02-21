import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CustomProvider from "@/utils/CustomProvider";
import { ThemeProvider } from "@/context/themeConext";


{/* Font */ }
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next News Portal App",
  description: "using next js, typescript and shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CustomProvider>
              {children}
            </CustomProvider>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}