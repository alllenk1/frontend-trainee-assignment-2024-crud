import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Modal, Typography } from '@mui/material';

import { Advertisement } from '@/entities/advertisements';

import { modalStyle } from '../../lib';
import style from './index.module.scss';

type AdvertisementUpdateModalProps = {
    data: Advertisement;
    isOpen: boolean;
    onClose: (value: boolean) => void;
};

export const AdvertisementUpdateModal = ({ data, isOpen, onClose }: AdvertisementUpdateModalProps) => {
    // const [isUpdate, setUpdate] = useState<boolean>(false);
    // const [form, setForm] = useState<AdvertisementsFormItems>(DEFAULT_VALUES);
    // const [errors, setErrors] = useState<AdvertisementsFormItems>(DEFAULT_ERRORS);

    // const [createAdvertisement, { isLoading }] = useCreateAdvertisementMutation({});

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setForm((prev) => ({
    //         ...prev,
    //         [event.target.name]: event.target.value,
    //     }));
    //     setErrors((prev) => ({
    //         ...prev,
    //         [event.target.name]: '',
    //     }));
    // };
    //
    // const handleSubmit = async () => {
    //     const { name, description, imageUrl, price } = form;
    //
    //     if (validateCreateAdvertisementForm(form, setErrors)) {
    //         await createAdvertisement({
    //             name,
    //             description,
    //             imageUrl,
    //             price: Number(price),
    //             createdAt: new Date().toISOString(),
    //             views: 0,
    //             likes: 0,
    //         })
    //             .unwrap()
    //             .then(() => {
    //                 onClose(false);
    //                 setForm(DEFAULT_VALUES);
    //                 setErrors(DEFAULT_ERRORS);
    //             });
    //     }
    // };

    return (
        <Modal open={isOpen} onClose={() => onClose(false)}>
            <Box sx={modalStyle} className={style.modal}>
                <Typography variant="h5" component="h2">
                    {data.name}
                </Typography>
                <Box className={style.card} component="section">
                    <img className={style.image} src={data.imageUrl || '/img/placeholder-img.png'} alt={data.name} />
                    {data.description && (
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {data.description}
                        </Typography>
                    )}
                    <Box className={style.icons} sx={{ paddingBottom: '0' }}>
                        <Typography className={style.icon} variant="body2" sx={{ color: 'text.secondary' }}>
                            <FavoriteIcon /> {data.likes}
                        </Typography>
                        <Typography className={style.icon} variant="body2" sx={{ color: 'text.secondary' }}>
                            <VisibilityIcon /> {data.views}
                        </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                        {`${data.price} руб.`}
                    </Typography>
                </Box>
                {/*    <TextField*/}
                {/*        className={style.input}*/}
                {/*        variant="outlined"*/}
                {/*        placeholder="Название"*/}
                {/*        name="name"*/}
                {/*        error={!!errors.name}*/}
                {/*        helperText={errors.name}*/}
                {/*        value={form.name}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*    <TextField*/}
                {/*        className={style.input}*/}
                {/*        variant="outlined"*/}
                {/*        placeholder="Описание"*/}
                {/*        name="description"*/}
                {/*        value={form.description}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*    <TextField*/}
                {/*        className={style.input}*/}
                {/*        variant="outlined"*/}
                {/*        placeholder="Ссылка на картинку"*/}
                {/*        name="imageUrl"*/}
                {/*        error={!!errors.imageUrl}*/}
                {/*        helperText={errors.imageUrl}*/}
                {/*        value={form.imageUrl}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*    <TextField*/}
                {/*        className={style.input}*/}
                {/*        variant="outlined"*/}
                {/*        placeholder="Цена"*/}
                {/*        name="price"*/}
                {/*        error={!!errors.price}*/}
                {/*        helperText={errors.price}*/}
                {/*        value={form.price}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*<Button className={style.button} variant="contained" size="medium" disabled={isLoading} onClick={handleSubmit}>*/}
                {/*    Изменить*/}
                {/*</Button>*/}
                {/*</Box>*/}
            </Box>
        </Modal>
    );
};
