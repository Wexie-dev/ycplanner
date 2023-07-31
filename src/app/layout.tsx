import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from '@next/font/local';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const butler = localFont({
  src: [
    {
      path: '../../public/fonts/butler/._Butler_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/._Butler_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/._Butler_Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/._Butler_Black.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/._Butler_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/butler/._Butler_ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-butler',
});

const bellina = localFont({
  src: [
    {
      path: '../../public/fonts/bellina/BellinaFlorence.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-bellina',
});

export const metadata: Metadata = {
  title: 'YC Planner',
  description: 'Haz realidad tu evento ideal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${montserrat.variable} ${butler.variable} ${bellina.variable} bg-[#F5F5F5] font-sans text-typographyGray`}
      >
        {children}
      </body>
    </html>
  );
}
