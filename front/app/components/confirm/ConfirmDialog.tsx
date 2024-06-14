import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/navigation";
import { DialogGHuntData } from './DialogData';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export function ConfirmDialog(props: {
  isOpen: boolean;
  closeDialog: () => void;
}) {
  const router = useRouter();

  return (
    <React.Fragment>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={props.isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Are you sure you want to send this?
        </DialogTitle>
        <DialogContent dividers>
          <DialogGHuntData />
        </DialogContent>
        <DialogActions>
        <Button
          autoFocus
          onClick={props.closeDialog}
          style={{
            color: "red",
            border: "1px solid red",
            padding: "10px 20px",
            borderRadius: "5px",
            marginRight: "10px"
          }}
        >
          No
        </Button>
        <Button 
          autoFocus 
          onClick={() => router.push('completed')}
          style={{
            
            border: "1px solid",
            padding: "10px 20px",
            borderRadius: "5px",
            marginRight: "10px"
          }}>
          Yes
        </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}