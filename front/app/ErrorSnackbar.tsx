import { Snackbar, Alert } from "@mui/material";

export function ErrorSnackbar(props: {
   hasError: boolean;
   closeError: () => void;
}) {
   return (
       <Snackbar
           open={props.hasError}
           autoHideDuration={4000}
           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
           onClose={props.closeError}
       >
           <Alert severity="error" onClose={props.closeError} >
               送信に失敗しました
           </Alert>
       </Snackbar>
   );
};