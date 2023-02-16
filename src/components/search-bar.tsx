import { useAppDispatch } from "@/redux/store";
import { searchTvShows } from "@/redux/tvShows/tvShowsApi";
import styles from "@/styles/SearchBar.module.css";
import { FC, useState } from "react";

interface SearchBarProps {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery(event.target.value);
  };

  const handleSearch = (): void => {
    setSearchQuery(query);
    dispatch(searchTvShows(query));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for TV Shows"
        value={query}
        onChange={handleQueryChange}
        className={styles.searchBarInput}
      />
      <button onClick={handleSearch} className={styles.searchBarButton}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
