import { useState } from "react";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");

  return (
    <div className="search">
      <input
        placeholder="Rechercher"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button
        type="button"
        onClick={() => setSearchParams(query ? { query } : {})}
      >
        Rechercher
      </button>
    </div>
  );
};

export default Search;
