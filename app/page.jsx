import SearchForm from '@/components/SearchForm';
import Hero from '@/components/Hero';
import Benefits from '@/components/section/Benefits';
import BecomeAMember from '@/components/section/BecomeAMember';
import PopularLocations from '@/components/section/PopularLocations';
import WeAreUnique from '@/components/section/WeAreUnique';
import Offers from '@/components/section/Offers';
import Testimonials from '@/components/section/Testimonials';
import MobileApp from '@/components/section/MobileApp';

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <SearchForm /> */}
      <Benefits />
      <BecomeAMember />
      <PopularLocations />
      <WeAreUnique />
      <Offers />
      <Testimonials />
      <MobileApp />
    </div>
  );
}
