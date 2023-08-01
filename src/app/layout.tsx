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
  description: 'Haz realidad tu evento ideal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${montserrat.variable} ${butler.variable} ${anguilla.variable} overflow-y-hidden bg-[#F5F5F5] font-sans text-typographyGray`}
      >
        {children}
      </body>
    </html>
  );
}
