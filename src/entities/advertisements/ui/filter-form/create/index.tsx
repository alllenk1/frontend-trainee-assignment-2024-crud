import { Button } from '@mui/material';

import style from './index.module.scss';

type AdvertisementsCreateButtonProps = {
    onChangeCreateModal: (value: boolean) => void;
};

export const AdvertisementsCreateButton = ({ onChangeCreateModal }: AdvertisementsCreateButtonProps) => {
    return (
        <Button className={style.button} variant="contained" size="medium" onClick={() => onChangeCreateModal(true)}>
            Новое объявление
        </Button>
    );
};
