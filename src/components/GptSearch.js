import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="md:w-full  h-screen object-cover "
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="pt-[20] md: p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;
