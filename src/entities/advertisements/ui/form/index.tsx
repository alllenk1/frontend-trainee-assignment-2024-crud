import { FormControl, TextField } from '@mui/material';

import style from './index.module.scss';
import { AdvertisementsLimitInput } from './limit';

type AdvertisementsFormProps = {
    limit: number | undefined;
    onChangeLimit: (value: number) => void;
};

export const AdvertisementsForm = ({ limit, onChangeLimit }: AdvertisementsFormProps) => {
    return (
        <FormControl variant="standard" className={style.form}>
            <AdvertisementsLimitInput limit={limit} onChangeLimit={onChangeLimit} />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </FormControl>
    );
};
