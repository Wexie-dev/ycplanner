import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { keywordsArray } from '@/constants';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const butler = localFont({
  src: [
    {
      path: '../../public/fonts/butler/Butler-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/Butler.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/Butler-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/Butler-Black.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/Butler-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/Butler-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-butler',
});

const anguilla = localFont({
  src: [
    {
      path: '../../public/fonts/anguilla/Anguilla.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-anguilla',
});

export const metadata: Metadata = {
  title: 'YC Planner',
  description: 'Haz realidad tu evento ideal. Yanina Corti - Wedding Planner y Event Planner',
  applicationName: 'YC Planner web',
  referrer: 'origin-when-cross-origin',
  authors: [
    {
      name: 'Yanina Corti',
    },
  ],
  keywords: [
    'Yanina Corti',
    'Wedding Planner',
    'Event Planner',
    'Wedding & Event Planner',
    'Planificadora de eventos',
    ...keywordsArray,
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#A6837F' },
  ],
  openGraph: {
    title: 'YC Planner',
    description: 'Haz realidad tu evento ideal.',
    url: 'https://ycplanner.com.ar',
    siteName: 'Yanina Corti - Wedding Planner en Argentina',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="es">
      <body
        className={`${montserrat.variable} ${butler.variable} ${anguilla.variable} bg-[#F5F5F5] font-sans text-typographyGray`}
      >
        {children}
      </body>
    </html>
  );
}
