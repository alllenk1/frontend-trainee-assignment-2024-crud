import type { AdvertisementsFormItems } from '../types';

export const DEFAULT_VALUES: AdvertisementsFormItems = {
    name: '',
    description: '',
    imageUrl: '',
    price: '',
};

export const DEFAULT_ERRORS: AdvertisementsFormItems = {
    name: '',
    description: '',
    imageUrl: '',
    price: '',
};

export const modalStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    maxHeight: '90%',
    overflowY: 'auto',
};
