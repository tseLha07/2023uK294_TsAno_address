import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchFunction from '../Atoms/SearchBar';
import AppBarTitle from '../Atoms/AppBarTitle';
import IconBar from '../Atoms/IconBar';
import AddIconBar from '../Atoms/AddIconBar';

export default function SearchAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <header
        className='barBackground'
        >
          <Toolbar>
            <IconBar/>
            <AppBarTitle />
            <AddIconBar/>
            <SearchFunction />
          </Toolbar>
        </header>
      </Box>
    );
  }