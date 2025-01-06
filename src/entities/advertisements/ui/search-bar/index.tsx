import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, Input, InputAdornment } from '@mui/material';
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
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
                value={searchString}
                onChange={handleChangeSearchQuery}
            />
        </FormControl>
    );
};
