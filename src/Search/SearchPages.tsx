import { Alert, List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchBar } from "./SearchComponents/SearchBar";
import { useSearchMutation } from "./SearchHooks";

const queryParamKey = "query";

export const SearchResult = () => {
  const searchMutation = useSearchMutation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, _] = useState(searchParams.get(queryParamKey));

  const handleSearch = (query: string) => {
    setSearchParams(() => {
      return [[queryParamKey, query]];
    });
  };

  useEffect(() => {
    searchMutation.mutate(searchParams.get(queryParamKey));
  }, [searchParams]);

  return (
    <Stack spacing={2}>
      <SearchBar query={query} handleSearch={handleSearch} />

      {searchMutation.isLoading && (
        <Alert role="status" severity="info">
          Loading
        </Alert>
      )}

      {searchMutation.isError && (
        <Alert role="alert" severity="error">
          {searchMutation.error?.message}
        </Alert>
      )}

      {searchMutation.isSuccess && (
        <List>
          {searchMutation.data.map((person) => (
            <ListItem key={person.id} role="listitem">
              {person.name}
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
};
