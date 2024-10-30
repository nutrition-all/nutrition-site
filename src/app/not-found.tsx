"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function NotFound() {
    const router = useRouter();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        router.push("/nutrients");
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [router]);
  
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        p={3}
      >
        <Typography variant="h1" component="h1" fontWeight="bold" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Página não encontrada
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          Redirecionando para a página de nutrientes...
        </Typography>
        <CircularProgress color="primary" />
      </Box>
    );
  }