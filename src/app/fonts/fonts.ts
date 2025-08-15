import localFont from 'next/font/local';

export const sfProFont = localFont({
  src: [
    {
      path: './SF-Pro/SFProDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: './SF-Pro/SFProDisplay-Regular.woff',
      weight: '400',
    },
    {
      path: './SF-Pro/SFProDisplay-Bold.woff2',
      weight: '700',
    },
    {
      path: './SF-Pro/SFProDisplay-Bold.woff',
      weight: '700',
    },
    {
      path: './SF-Pro/SFProDisplay-Semibold.woff2',
      weight: '600',
    },
    {
      path: './SF-Pro/SFProDisplay-Semibold.woff',
      weight: '600',
    },
  ],
});
