import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '/node_modules/modern-normalize/modern-normalize.css';
import './globals.scss';
import React from 'react';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mystic Ball',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
