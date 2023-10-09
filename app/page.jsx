import SearchForm from '@/components/SearchForm';
import Tagline from '@/components/Tagline';
import Benefits from '@/components/section/Benefits';
import BecomeAMember from '@/components/section/BecomeAMember';
import PopularLocations from '@/components/section/PopularLocations';
import WeAreUnique from '@/components/section/WeAreUnique';
import Offers from '@/components/section/Offers';

export default function Home() {
  return (
    <div>
      <Tagline />
      {/* <SearchForm /> */}
      <Benefits />
      <BecomeAMember />
      <PopularLocations />
      <WeAreUnique />
      <Offers />
    </div>
  );
}
