'use client';

import { Stack, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { SubjectField, EmailField, BodyField } from './InputFields';
import {FormValuesType} from "./FormValuesType";

export function ContactForm(props: {
    onSubmit: (formValues: FormValuesType) => void;
    isLoading: boolean;
}) {

    const { handleSubmit, formState: { errors }, register } = useForm<FormValuesType>();

    return (
        <form noValidate onSubmit={handleSubmit(props.onSubmit)}>

            <Stack spacing={2} sx={{ maxWidth: 'sm', margin: 'auto', marginTop: 8 }}>

                <SubjectField register={register} errorMessage={errors.name?.message}/>

                <EmailField register={register} errorMessage={errors.email?.message} />

                <BodyField register={register} errorMessage={errors.description?.message} />

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
    );
};
