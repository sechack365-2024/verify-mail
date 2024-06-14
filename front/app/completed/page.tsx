'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendSharpIcon from '@mui/icons-material/SendSharp';

export function CompletedPage(){
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div style={styles.container}>
      <SendSharpIcon style={styles.icon} />
      <Typography variant="h4" gutterBottom style={styles.title}>
        送信が完了しました
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBackToHome}
        style={styles.button}
      >
        ホームに戻る
      </Button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '50px',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: '80px',
    color: '#4caf50',
    marginBottom: '20px',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  },
  message: {
    color: '#555',
    marginBottom: '40px',
  },
  button: {
    marginTop: '20px',
  },
};

export default CompletedPage;
