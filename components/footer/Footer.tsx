'use client';

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Footer = () => {
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
      direction='column'
      sx={{
        margin: `0 auto`,
        maxWidth: `1200px`,
      }}
    >
      <Grid xs={12}>
        <Typography variant='h6' align='center'>
          Bormin Rénovation, Rue du Clos 8, 1800 VEVEY, Suisse, teL:
          +41765314652, borminart@gmail.com
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant='h6' align='center'>
          IBAN: CH 29 0026 6266 1373 3540, VISA Card 5351 4602 1314 4652
        </Typography>
      </Grid>
    </Grid>
  );
};
