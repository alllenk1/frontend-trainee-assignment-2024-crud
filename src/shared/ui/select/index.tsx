import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, IconButton, InputAdornment, InputLabel, Select } from '@mui/material';
import { ReactNode } from 'react';

type SelectComponentProps<T> = {
    label: string;
    defaultValue?: string | number;
    value: T;
    onChangeValue: (value: T) => void;
    onResetValue: () => void;
    children: ReactNode;
};

export const SelectComponent = <T,>({ label, value, defaultValue, onChangeValue, onResetValue, children }: SelectComponentProps<T>) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={value}
                IconComponent={null as unknown as React.ElementType}
                endAdornment={
                    value && value !== defaultValue ? (
                        <InputAdornment position="end">
                            <IconButton sx={{ padding: '0' }} onClick={onResetValue}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    ) : (
                        <ArrowDropDownIcon />
                    )
                }
                onChange={(e) => onChangeValue(e.target.value as T)}
            >
                {children}
            </Select>
        </FormControl>
    );
};
