import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chekins.com',
  description:
    'Hotel bookings redefined at Chekins.com - your gateway to personalized travel experiences. Explore our curated accommodations, unlock wholesale rates, and enjoy a new level of affordability. Discover the future of hotel bookings today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
