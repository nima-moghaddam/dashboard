import { TextField, InputAdornment, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = () => {
    return (
      <TextField
          sx={{
              height: '38px',
              width: {xs: '100%', md: 'unset'},
              outline: 'none',
              backgroundColor: 'primary.semiWhite',
              borderRadius: '0.25rem',
          }}
          placeholder= 'جستجو ...'
          InputProps={{
              disableUnderline: true ,
              startAdornment: (
              <InputAdornment position="start" sx={{ ml: 1.5, mt:0.5 }}>
                  <SearchIcon sx={{fontSize: '20px', color: 'primary.semiGray'}} />
              </InputAdornment>
              ),
          }}
          variant="standard"
      />
    )
}
  
export default SearchInput