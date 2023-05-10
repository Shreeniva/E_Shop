import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';

export default function CommonSearch(props) {
    const { searchVal, cancelSearch, requestSearch, type } = props
    return (
        <TextField
            autoFocus={searchVal ? true : false}
            sx={{
                borderRadius: 3,
                backgroundColor: '#F4F7FE',
                mr: '10px',
                '& .MuiOutlinedInput-root': {
                    height: '50px',
                },
                '& fieldset': { border: type ? '1.5px solid #707175' : 'none', borderRadius: 2 },
                height:'50px',
                width:'300px'
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position='end'>
                        <ClearIcon
                            onClick={() => cancelSearch()}
                            fontSize='small'
                            sx={{ cursor: 'pointer', visibility: searchVal ? 'visible' : 'hidden' }}
                        />
                    </InputAdornment>
                ),
            }}
            placeholder='Search here...'
            value={searchVal}
            onChange={(e) => requestSearch(e)}
        />
    );
}
