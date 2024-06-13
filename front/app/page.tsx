'use client';
import { MailForm } from './components/form/MailForm';
import { ErrorCheckEmailAddress } from './components/form/ErrorCheckEmailAddress';
import { useMailForm } from '@/app/service/form/use-mail-form';
import { ConfirmDialog } from "@/app/components/confirm/ConfirmDialog"


export default function Home() {
  const { hasError, isLoading, isOpenDialog, closeError, closeDialog, checkEmailAddress } = useMailForm();

  return (
    <main>
      <MailForm onSubmit={checkEmailAddress}isLoading={isLoading} />
      <ConfirmDialog isOpen={isOpenDialog} closeDialog={closeDialog}/>
      <ErrorCheckEmailAddress hasError={hasError} closeError={closeError} />
    </main>

  );
}
