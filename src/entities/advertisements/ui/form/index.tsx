import { FormControl } from '@mui/material';

import { AdvertisementsCreateButton } from '@/entities/advertisements/ui/form/create';

import type { AdvertisementLimitValue, AdvertisementSortValue } from '../../types';
import style from './index.module.scss';
import { AdvertisementsLimitSelect } from './limit';
import { AdvertisementsSortSelect } from './sort';

type AdvertisementsFormProps = {
    sortValue: AdvertisementSortValue;
    onChangeLimit: (value: AdvertisementLimitValue) => void;
    onChangeSortValue: (value: AdvertisementSortValue) => void;
    onChangeCreateModal: (value: boolean) => void;
};

export const AdvertisementsFilterForm = ({ onChangeLimit, sortValue, onChangeSortValue, onChangeCreateModal }: AdvertisementsFormProps) => {
    return (
        <FormControl variant="standard" className={style.form}>
            <AdvertisementsLimitSelect onChangeLimit={onChangeLimit} />
            <AdvertisementsSortSelect sortValue={sortValue} onChangeSortValue={onChangeSortValue} />
            <AdvertisementsCreateButton onChangeCreateModal={onChangeCreateModal} />
        </FormControl>
    );
};
