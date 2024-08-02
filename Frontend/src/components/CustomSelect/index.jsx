import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

export default function SelectLabels({ data, label }) {
    const [val, setVal] = React.useState(0);

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    return (
        <Stack direction={"row"} alignItems={"center"} >
            {label && <InputLabel>{label} </InputLabel>}
            <FormControl sx={{ m: 1, minWidth: 220 }}>
                <Select
                    value={val}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {data && data.map((text, index) =>
                        <MenuItem value={index}>{text}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Stack>
    );
}