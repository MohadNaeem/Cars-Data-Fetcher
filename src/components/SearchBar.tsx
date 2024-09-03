import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      label="Search Users"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
      sx={{
        height: "36px",
        width: "100%", // Ensure it takes full width
        "& .MuiOutlinedInput-root": {
          height: "36px",
          paddingRight: "8px",
        },
        "& .MuiInputBase-root": {
          height: "36px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "0.875rem",
          top: "-5px",
        },
      }}
    />
  );
};

export default SearchBar;
