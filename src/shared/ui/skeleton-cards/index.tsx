import * as React from 'react';
import { Box, Skeleton } from '@mui/material';

import style from './index.module.scss';

const skeletonCards = Array.from(new Array(3), (_, index) => index + 1);

export const SkeletonCards = () => {
    return (
        <Box className={style.cards}>
            {skeletonCards.map((item) => (
                <Box key={item}>
                    <Skeleton animation="wave" height="30px" />
                    <Skeleton animation="wave" width="60%" height="30px" />
                    <Skeleton animation="wave" width="100%" height="240px"></Skeleton>
                    <Skeleton animation="wave" height="30px" />
                    <Skeleton animation="wave" height="30px" />
                </Box>
            ))}
        </Box>
    );
};
