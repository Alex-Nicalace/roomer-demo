import localFont from 'next/font/local';

export const sfProFont = localFont({
  src: [
    {
      path: '../../../../public/fonts/SF-Pro/SFProDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../../../public/fonts/SF-Pro/SFProDisplay-Regular.woff',
      weight: '400',
    },
    {
      path: '../../../../public/fonts/SF-Pro/SFProDisplay-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../../../public/fonts/SF-Pro/SFProDisplay-Bold.woff',
      weight: '700',
    },
    {
      path: '../../../../public/fonts/SF-Pro/SFProDisplay-Semibold.woff2',
      weight: '600',
    },
    {
      path: '../../../../public/fonts/SF-Pro/SFProDisplay-Semibold.woff',
      weight: '600',
    },
  ],
  fallback: ['sans-serif'],
});
