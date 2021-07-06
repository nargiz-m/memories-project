import React from 'react';
import { Grid , TextField, InputAdornment, IconButton } from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';

const Input = ({ name, label, handleChange, type, autoFocus, half, handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={ half ? 6 : 12 }>
            <TextField 
                name={name}
                label={label}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                autoFocus={autoFocus}
                type={type}
                InputProps={type === "password" ?  {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility/> : <VisibilityOff/> }
                            </IconButton>
                        </InputAdornment>)
                } : null}
            />
        </Grid>
    )
}

export default Input;