import type { AdvertisementsFormItems } from '../../types';
import { DEFAULT_ERRORS } from '../index';

export const validateCreateAdvertisementForm = (form: AdvertisementsFormItems, onErrors: (value: AdvertisementsFormItems) => void) => {
    let isValid = true;
    const urlPattern = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    const newErrors = { ...DEFAULT_ERRORS };

    if (!form.name) {
        newErrors.name = 'Обязательное поле';
        isValid = false;
    }

    if (!form.price) {
        newErrors.price = 'Обязательное поле';
        isValid = false;
    } else if (isNaN(+form.price)) {
        newErrors.price = 'Введите число';
        isValid = false;
    }

    if (form.imageUrl && !urlPattern.test(form.imageUrl)) {
        newErrors.imageUrl = 'Неправильная ссылка';
        isValid = false;
    }

    onErrors(newErrors);
    return isValid;
};
