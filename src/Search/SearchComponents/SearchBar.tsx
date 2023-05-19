import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

type SearchBarQuery = (query: string) => void;

interface SearchBarProps {
  query?: string | null;
  handleSearch?: SearchBarQuery;
}

export const SearchBar = ({
  query: initialQuery,
  handleSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery ?? "");

  return (
    <Grid container role="search" spacing={2}>
      <Grid item xs={12} md={8}>
        <TextField
          variant="outlined"
          inputProps={{ role: "searchbox" }}
          value={query}
          sx={{ width: "100%" }}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          variant="contained"
          role="button"
          size="large"
          sx={{ height: "100%", width: "100%" }}
          onClick={() => handleSearch && handleSearch(query)}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
