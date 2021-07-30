import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';

import '../assets/styles/components/CommitSearchField.scss';

const useStyles = makeStyles(
    (theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        }
    })
);

export const CommitSearchField = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <FormControl
            className={
                clsx(classes.margin, classes.withoutLabel, classes.textField)
            }
        >
            <Input
                id="standard-adornment-id"
                value={values.weight}
                onChange={handleChange('weight')}
                endAdornment={
                    <InputAdornment position="end">
                        <FaSearch />
                    </InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                    'placeholder': 'ID'
                }}
            />
        </FormControl>
    )
}
