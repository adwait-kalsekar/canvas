import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Metadata } from 'next';
import {
  Topbar,
  Bottombar,
  LeftSidebar,
  RightSidebar,
} from '@/components/shared';

export const metadata: Metadata = {
  title: 'Canvas',
  description:
    'A Next.js full stack application for posting social media content, create communities, and comment on other posts - similar to threads or twitter',
};

const inter = Inter({ subsets: ['latin'] });

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
