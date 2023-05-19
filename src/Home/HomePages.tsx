import { useNavigate } from "react-router-dom";

import { SearchBar } from "../Search";

export const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) =>
    navigate(`/search?query=${encodeURI(query)}`);

  return <SearchBar handleSearch={handleSearch} />;
};
