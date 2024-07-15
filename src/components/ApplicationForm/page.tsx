import { Box, Button, MenuItem, TextField, Typography,SnackbarContent } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './ApplicationForm.module.css';
import * as yup from 'yup';
import { useState } from 'react';
import { Snackbar } from '@mui/material';

const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    age: yup
        .number()
        .typeError('Age must be a number')
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer'),
    gender: yup.string().required('Gender is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    pincode: yup
        .string()
        .required('Pincode is required')
        .matches(/^\d{6}$/, 'Pincode must be 6 digits'),
});

const ApplicationForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: '',
            age:0, 
            gender: '',
            city: '',
            state: '',
            pincode: '',
        },
    });
    
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const onSubmit = (data: any) => {
        console.log(data);
        reset(); 
        setOpenSnackbar(true);
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography variant="h4" className={styles.centeredText}>Application Form</Typography>
            <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                    <TextField {...field} label="Full Name" variant="outlined" fullWidth margin="normal" error={!!errors.fullName} helperText={errors.fullName?.message} />
                )}
            />
            <Controller
                name="age"
                control={control}
                render={({ field }) => (
                    <TextField {...field} label="Age" type="number" variant="outlined" fullWidth margin="normal" error={!!errors.age} helperText={errors.age?.message} />
                )}
            />
            <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Gender" select variant="outlined" fullWidth margin="normal" error={!!errors.gender} helperText={errors.gender?.message} value={field.value || 'Select genders'} >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </TextField>
                )}
            />
            <Controller
                name="city"
                control={control}
                render={({ field }) => (
                    <TextField {...field} label="City" variant="outlined" fullWidth margin="normal" error={!!errors.city} helperText={errors.city?.message} />
                )}
            />
            <Controller
                name="state"
                control={control}
                render={({ field }) => (
                    <TextField {...field} label="State" variant="outlined" fullWidth margin="normal" error={!!errors.state} helperText={errors.state?.message} />
                )}
            />
            <Controller
                name="pincode"
                control={control}
                render={({ field }) => (
                    <TextField {...field} label="Pincode" variant="outlined" fullWidth margin="normal" error={!!errors.pincode} helperText={errors.pincode?.message} />
                )}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
                message="Form submitted successfully!"
                action={
                    <Button color="inherit" onClick={handleCloseSnackbar}>
                        Close
                    </Button>
                }
            />

        </Box>
    );
};

export default ApplicationForm;
