import SearchForm from '@/components/SearchForm';
import Tagline from '@/components/Tagline';
import Benefits from '@/components/section/Benefits';
import BecomeAMember from '@/components/section/BecomeAMember';

export default function Home() {
  return (
    <div>
      <Tagline />
      {/* <SearchForm /> */}
      <Benefits />
      <BecomeAMember />
    </div>
  );
}
