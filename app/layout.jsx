import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chekins.com',
  description:
    'Hotel bookings redefined at Chekins.com - your gateway to personalized travel experiences. Explore our curated accommodations, unlock wholesale rates, and enjoy a new level of affordability. Discover the future of hotel bookings today!',
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Main {...props} />
        <Footer />
      </body>
    </html>
  );
}
