import * as React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { ReactNode } from 'react';

import style from './index.module.scss';
import { modalStyle } from './lib';

type ModalComponentProps = {
    title: string;
    isOpen: boolean;
    onClose: (value: boolean) => void;
    children: ReactNode;
};

export const ModalComponent = ({ title, isOpen, onClose, children }: ModalComponentProps) => {
    return (
        <Modal className={style.container} open={isOpen} onClose={() => onClose(false)}>
            <Box sx={modalStyle} className={style.modal}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    {title}
                </Typography>
                {children}
            </Box>
        </Modal>
    );
};
