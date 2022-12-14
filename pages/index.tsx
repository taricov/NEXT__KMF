import AppPagination from "../styles/AppPagination";
import AppCard from "./components/AppCard";
import AppSearchService from "./components/AppSearchService";
import FeaturedTopics from "./components/FeaturedTopics";
import MainServicesBtns from "./components/MainServicesBtns";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen w-screen flex-col bg-gradient-to-b from-gray-900 to-slate-800 text-white">
      <div className="mx-auto my-5 flex h-screen w-11/12 flex-col justify-between">
        <div className="mx-auto my-5 flex w-full flex-col justify-center">
          <AppSearchService />
          <MainServicesBtns />
          <FeaturedTopics />
          <div className="">
            <AppCard />
          </div>
        </div>
        <AppPagination />
      </div>
    </div>
  );
}
