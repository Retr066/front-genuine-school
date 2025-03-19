import Menu from "./ui/Menu";
import HeroBanner from "./ui/HeroBanner";
import JoinUs from "./ui/JoinUs";
import WeAreAmerican from "./ui/WeAreAmerican";
import MissionVision from "./ui/MissionVision";
import NextSlideButton from "./_components/NextSlideButton";

export default function Home() {
  return (
    <div className="@container flex pb-2 font-[family-name:var(--font-outfit-sans)]">
      <div className="flex flex-col w-full lg:w-4/5 pr-2   pl-2 md:pl-6">
        <HeroBanner />
        <MissionVision />
        <WeAreAmerican />
        <JoinUs />
      </div>
      <div className=" lg:w-1/5 p-6 fixed right-0 top-0 hidden lg:flex">
        <Menu />
      </div>
      <div className="hidden fixed bottom-0 right-0  p-4  lg:flex justify-center">
        <NextSlideButton />
      </div>
    </div>
  );
}
