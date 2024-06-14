'use client'
import { Stack, Button, Box, TextField, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormValuesType } from '@/app/types/form-value.type';

export function MailForm(props: {
    onSubmit: (formValues: FormValuesType) => void;
    isLoading: boolean;
}) {
    const { handleSubmit, formState: { errors }, register } = useForm<FormValuesType>();

    return (
        <Paper elevation={3} sx={{ maxWidth: '600px', margin: 'auto', padding: 4, marginTop: 8 }}>
            <form noValidate onSubmit={handleSubmit(props.onSubmit)}>
                <Stack spacing={2}>
                    <TextField
                        label="宛先"
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...register('email', { required: '宛先を入力してください' })}
                    />
                    <TextField
                        label="件名"
                        variant="outlined"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        {...register('name', { required: '件名を入力してください' })}
                    />
                    <TextField
                        label="本文"
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={10}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        {...register('description', { required: '本文を入力してください' })}
                    />
                    <Box textAlign='right'>
                        <Button
                            variant="contained"
                            type='submit'
                            disabled={props.isLoading}
                        >
                            送信
                        </Button>
                    </Box>
                </Stack>
            </form>
        </Paper>
    );
};
