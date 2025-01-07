import { FormControl, TextField } from '@mui/material';

import type { SortItemValue } from '../../types';
import style from './index.module.scss';
import { AdvertisementsLimitInput } from './limit';
import { AdvertisementsSortSelect } from './sort';

type AdvertisementsFormProps = {
    limit: number | undefined;
    sortValue: SortItemValue;
    onChangeLimit: (value: number) => void;
    onChangeSortValue: (value: SortItemValue) => void;
};

export const AdvertisementsForm = ({ limit, onChangeLimit, sortValue, onChangeSortValue }: AdvertisementsFormProps) => {
    return (
        <FormControl variant="standard" className={style.form}>
            <AdvertisementsLimitInput limit={limit} onChangeLimit={onChangeLimit} />
            <AdvertisementsSortSelect sortValue={sortValue} onChangeSortValue={onChangeSortValue} />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </FormControl>
    );
};
