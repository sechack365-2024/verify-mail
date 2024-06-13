import { Snackbar, Alert } from "@mui/material";

export function ErrorCheckEmailAddress(props: {
   hasError: boolean;
   closeError: () => void;
}) {
   return (
       <Snackbar
           open={props.hasError}
           autoHideDuration={4000}
           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
       >
           <Alert severity="error">
               Internal Server Error
           </Alert>
       </Snackbar>
   );
};