import { FormControl, TextField } from '@mui/material';

import type { AdvertisementSortValue } from '../../types';
import style from './index.module.scss';
import { AdvertisementsLimitInput } from './limit';
import { AdvertisementsSortSelect } from './sort';

type AdvertisementsFormProps = {
    sortValue: AdvertisementSortValue;
    onChangeLimit: (value: number) => void;
    onChangeSortValue: (value: AdvertisementSortValue) => void;
};

export const AdvertisementsForm = ({ onChangeLimit, sortValue, onChangeSortValue }: AdvertisementsFormProps) => {
    return (
        <FormControl variant="standard" className={style.form}>
            <AdvertisementsLimitInput onChangeLimit={onChangeLimit} />
            <AdvertisementsSortSelect sortValue={sortValue} onChangeSortValue={onChangeSortValue} />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </FormControl>
    );
};
