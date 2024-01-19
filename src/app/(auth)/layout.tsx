import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Canvas',
  description: 'A threads or twitter clone using Next.js',
};

const inter = Inter({ subsets: ['latin'] });

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
