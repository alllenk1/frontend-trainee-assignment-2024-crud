import { TextField } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

type AdvertisementsLimitInputProps = {
    limit: number | undefined;
    onChangeLimit: (value: number) => void;
};

export const AdvertisementsLimitInput = ({ limit, onChangeLimit }: AdvertisementsLimitInputProps) => {
    const [value, setValue] = useState<string>(limit ? String(limit) : '');
    const [error, setError] = useState<string>('');

    const handleChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        setValue(newValue);
    };

    useEffect(() => {
        if (value) {
            const numValue = Number(value);

            if (isNaN(numValue)) {
                setError('Введите число');
            } else if (numValue < 1) {
                setError('Число должно быть больше нуля');
            } else {
                setError('');
                onChangeLimit(numValue);
            }
        } else {
            setError('');
        }
    }, [value, onChangeLimit]);

    return (
        <TextField
            id="limit"
            variant="outlined"
            placeholder="Объявлений на странице"
            error={!!error}
            helperText={error}
            value={value}
            onChange={handleChangeSearchQuery}
        />
    );
};
