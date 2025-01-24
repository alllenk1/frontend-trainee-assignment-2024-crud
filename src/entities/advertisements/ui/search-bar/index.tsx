import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, IconButton, Input, InputAdornment } from '@mui/material';
import { type ChangeEvent } from 'react';

type AdvertisementSearchBarProps = {
    searchString: string;
    onChangeSearchString: (value: string) => void;
};

export const AdvertisementsSearchBar = ({ searchString, onChangeSearchString }: AdvertisementSearchBarProps) => {
    const handleChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeSearchString(event.target.value);
    };

    return (
        <FormControl variant="standard">
            <Input
                id="search"
                placeholder="Искать объявления"
                endAdornment={
                    !searchString ? (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ) : (
                        <InputAdornment position="end">
                            <IconButton sx={{ padding: '0' }} onClick={() => onChangeSearchString('')}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }
                value={searchString}
                onChange={handleChangeSearchQuery}
            />
        </FormControl>
    );
};
