import "./globals.css";
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

export const metadata = {
  title: 'Welcome to John Keane Studios',
  description: 'John Keane Studios',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
