'use client';
import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';

export default function Contacts() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const setHidration = () => {
      setIsClient(true);
    };
    setHidration();
  }, []);

  if (!isClient) {
    return <p>loading</p>;
  }
  return (
    <Grid
      container
      sx={{
        margin: `0 auto`,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        border: '1px solid #ccc',
      }}
    >
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='link to back page'
        component={Link}
        href='/'
        sx={{
          position: 'fixed',
          top: 50,
          left: 16,
          zIndex: 1000,
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Grid size={12}>
        <Typography variant='body1' align='center'>
          Bormin Rénovation, Rue du Clos 8, 1800 VEVEY, Suisse, teL:
          +41765314652, borminart@gmail.com
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant='body1' align='center'>
          IBAN: CH 29 0026 6266 1373 3540, VISA Card 5351 4602 1314 4652
        </Typography>
      </Grid>
    </Grid>
  );
}
