import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
}

export default GptSearch;
