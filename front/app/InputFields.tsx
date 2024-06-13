import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { Controller, useForm } from 'react-hook-form';

import {FormValuesType} from "./FormValuesType";

export function SubjectField(props: {
    register: UseFormRegister<FormValuesType>;
    errorMessage?: string;
}) {
    return(
        <TextField
            label="件名(必須)"
            variant="filled"
            helperText=' '
            error={props.errorMessage !== undefined}
            {...props.register('name', { required: '件名を入力してください' })}
        />
    )
};

export function EmailField(props: {
    register: UseFormRegister<FormValuesType>;
    errorMessage?: string;
}) {

    return (
        <TextField
            label="メールアドレス（必須）"
            type='email'
            variant="filled"
            error={props.errorMessage !== undefined}
            helperText={props.errorMessage || ' '}
            {...props.register('email', {
                required: 'メールアドレスを入力してください',
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "無効なメールアドレスです",
                }
            })}
        />
    );
};

export function BodyField(props: {
    register: UseFormRegister<FormValuesType>;
    errorMessage?: string;
}) {
    return (
        <TextField
            multiline
            rows={6}
            label="本文（必須）"
            variant="filled"
            error={props.errorMessage !== undefined}
            helperText={props.errorMessage || ' '}
            {...props.register('description', { required: '本文入力をしてください' })}
        />
    );
};
