import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

import { limitItems } from '@/entities/advertisements';
import { AdvertisementLimitValue } from '@/entities/advertisements/types';

type AdvertisementsLimitInputProps = {
    onChangeLimit: (value: AdvertisementLimitValue) => void;
};

export const AdvertisementsLimitSelect = ({ onChangeLimit }: AdvertisementsLimitInputProps) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
        onChangeLimit(event.target.value as AdvertisementLimitValue);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="sort-label">Объявлений на странице</InputLabel>
            <Select label="Объявлений на странице" value={value} onChange={handleChange}>
                {limitItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
