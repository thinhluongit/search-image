import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import { Circles } from "react-loading-icons";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePhotos = () => {
    if (query) {
      setIsLoading(true);
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=E5jdH79V41lyawttDtgi_7P9XmL9odpVpiqo_P8zV2U`
        )
        .then((response) => {
          setPhotos([...photos, ...response.data.results]);
          setPage(page + 1);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error loading photos:", error);
          setIsLoading(false);
        });
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
    loadMorePhotos();
  };

  useEffect(() => {
    loadMorePhotos();
  }, [query]);

  return (
    <div className="bg-gray-900 flex-col items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-5">
          Search Image App
        </h1>
        <SearchBar onSearch={handleSearch} />
        <h1 className="text-white text-center mt-6 text-2xl">
          Result for: {query}
        </h1>
      </div>
      <InfiniteScroll loadMore={loadMorePhotos} hasMore={true}>
        {isLoading ? (
          <Circles color="black" className="justify-self-center self-center" />
        ) : (
          <PhotoList photos={photos} />
        )}
      </InfiniteScroll>
    </div>
  );
};

export default App;
