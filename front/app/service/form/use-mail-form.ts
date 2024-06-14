'use client';
import { useState } from 'react';
import { FormValuesType } from '@/app/types/form-value.type';
import { fetchGHuntData } from '@/app/service/confirm/fetch-ghunt-data';
import { useGHuntDataState } from '@/app/components/confirm/GHuntContext';


export const useMailForm = () => {
    const { setGhuntData } = useGHuntDataState();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenDialog, setIsDialogOpen] = useState(false);
    

    const closeError = () => setHasError(false);    
    const closeDialog = () => setIsDialogOpen(false);

    const checkEmailAddress = async (data: FormValuesType) => {
        console.log(data);
        setIsLoading(true);

        try {
            await fetchGHuntData(data, setGhuntData);  // 関数コンポーネント(function)の外でHooksを呼び出せない制約があるため引数で渡す
            setIsDialogOpen(true);
        } catch {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
   };

   return { hasError, isLoading, isOpenDialog, closeError, closeDialog, checkEmailAddress };
};
