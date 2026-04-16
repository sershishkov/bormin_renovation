'use client';

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Header = () => {
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
        justifyContent: 'space-between',
        alignItems: 'center',

        width: `100%`,
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
    >
      <Grid size={4}>
        <Link href='/'>
          <Typography variant='h6' align='center'>
            Bormin Rénovation,
          </Typography>
        </Link>
      </Grid>
      <Grid size={4}>
        <Typography variant='h6' align='center'>
          Rue du Clos 8, 1800 VEVEY, Suisse
        </Typography>
      </Grid>
      <Grid size={4}>
        <Typography variant='h6' align='center'>
          <Link href='tel:+41765314652' underline='hover'>
            teL: +41765314652
          </Link>
          {'   '}
          <Link href='mailto:borminart@gmail.com' underline='hover'>
            {'   '}borminart@gmail.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
