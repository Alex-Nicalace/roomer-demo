import type { Metadata } from 'next';
import { sfProFont } from 'app/fonts';

import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Румер',
  description: 'Главная страница приложения Румер',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={sfProFont.className}>{children}</body>
    </html>
  );
}
