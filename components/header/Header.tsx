'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Grid
            container
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              width: `100%`,
            }}
          >
            <Grid size={4}>
              <Link href='/'>
                <Image
                  src={`/my_images/Logo_001.jpg`}
                  alt='Logo Bormin Rénovation'
                  width={75}
                  height={75}
                />
              </Link>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2, display: 'none' }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid size={4}>
              <Typography variant='h6' align='center'>
                Rue du Clos 8, 1800 VEVEY, Suisse
              </Typography>
            </Grid>
            <Grid size={4}>
              <Grid
                container
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Grid size={12}>
                  {' '}
                  <Typography
                    variant='h6'
                    align='center'
                    sx={{
                      display: 'inline-block',
                      color: 'white',
                      width: '100%',
                      // border: '2px solid black',
                    }}
                    component={Link}
                    href='tel:+41765314652'
                  >
                    Appelez-nous : +41765314652
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography
                    variant='h6'
                    align='center'
                    sx={{
                      display: 'inline-block',
                      color: 'white',
                      width: '100%',
                      // border: '2px solid black',
                    }}
                    component={Link}
                    href='mailto:borminart@gmail.com'
                  >
                    Écrivez-nous: borminart@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
