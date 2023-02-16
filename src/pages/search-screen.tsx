import SearchBar from "@/components/search-bar";
import TVShowDetails from "@/components/tv-show-details";
import TvShowsList from "@/components/tv-show-list";
import { TvShow } from "@/redux/tvShows/tvShowsTypes";
import styles from "@/styles/SearchScreen.module.css";
import { useState } from "react";

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTvShow, setSelectedTvShow] = useState<TvShow | null>(null);

  return (
    <div className={styles.searchScreenContainer}>
      <div
        className={
          searchQuery
            ? styles.flexSearchContainer
            : styles.colFlexSearchContainer
        }
      >
        <img className={styles.logo} src="/logo.svg" alt="Vercel Logo" />
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      {searchQuery && !selectedTvShow && (
        <div className={styles.searchResultContainer}>
          <TvShowsList
            searchQuery={searchQuery}
            onSelectTvShow={setSelectedTvShow}
          />
        </div>
      )}
      {selectedTvShow && (
        <TVShowDetails
          tvShow={selectedTvShow}
          onSelectTvShow={setSelectedTvShow}
        />
      )}
    </div>
  );
};

export default SearchScreen;
