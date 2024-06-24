import { Inter } from 'next/font/google';
import '/node_modules/modern-normalize/modern-normalize.css';
import './globals.scss';
import React from 'react';
import styles from './layout.module.scss';
import Script from 'next/script';
import { TELEGRAM_WEP_APP_SCRIPT_URL } from '@/constants/common';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mystic Ball</title>
        <Script src={TELEGRAM_WEP_APP_SCRIPT_URL} />
      </head>
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
