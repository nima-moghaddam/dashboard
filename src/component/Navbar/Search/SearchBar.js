import { IconButton, Popover} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SearchInput from "./SearchInput";
import React, { useState } from "react";






const SearchBar = ({classes}) => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <IconButton
          sx={{ ml: 2, display: { xs: 'inline-flex', md: 'none' }, ...classes }}
          onClick={event => setOpen(event.currentTarget)}
        >
          <SearchIcon />
      </IconButton>
      <Popover
        elevation={0}
        anchorEl={open}
        open={Boolean(open)}
        PaperProps={{
          sx: {
            mt: 1.8,
            p:3,
            width: '100%',
            maxWidth: '100%',
            boxShadow: '0 5px 10px rgb(30 32 37 / 12%)',
            left: '0 !important',
            backgroundColor: 'primary.navWhite'
          }
        }}
        onClose={() => setOpen(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
      >
        <SearchInput />
      </Popover>
    </>
  )
}

export default SearchBar