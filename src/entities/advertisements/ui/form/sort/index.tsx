import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';

import type { AdvertisementSortValue } from '@/entities/advertisements';
import { sortItems } from '@/entities/advertisements/lib';

type AdvertisementsSortSelectProps = {
    sortValue: AdvertisementSortValue;
    onChangeSortValue: (value: AdvertisementSortValue) => void;
};

export const AdvertisementsSortSelect = ({ sortValue, onChangeSortValue }: AdvertisementsSortSelectProps) => {
    const handleChange = (event: SelectChangeEvent) => {
        onChangeSortValue(event.target.value as AdvertisementSortValue);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="sort-label">Сортировать по</InputLabel>
            <Select label="Сортировать по" value={sortValue} onChange={handleChange}>
                {sortItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.text}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
