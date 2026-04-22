'use client';

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneCallback from '@mui/icons-material/PhoneCallback';
import EmailIcon from '@mui/icons-material/Email';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import NavigationList from '@/components/menu/NavigationList';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(open);
    };

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
    <Box>
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
              <Grid
                container
                sx={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Grid size={1}>
                  <IconButton
                    onClick={toggleDrawer(true)}
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{
                      mr: 2,
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <SwipeableDrawer
                    anchor={'left'}
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                  >
                    <NavigationList toggleDrawer={toggleDrawer} />
                  </SwipeableDrawer>
                </Grid>
                <Grid size='grow'>
                  <Typography
                    variant='h6'
                    align='center'
                    sx={{
                      display: { xs: 'none', sm: 'none', md: 'inline-block' },
                      color: 'white',
                      width: '100%',
                      // border: '2px solid black',
                    }}
                    component={Link}
                    href='/'
                  >
                    Bormin Rénovation
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={4} sx={{ display: { xs: 'none', md: 'block' } }}>
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
                  flexDirection: { xs: 'row', sm: 'row', md: 'column' },
                }}
              >
                <Grid size={{ xs: 6, sm: 6, md: 12 }}>
                  {' '}
                  <Typography
                    variant='h6'
                    align='center'
                    sx={{
                      display: { xs: 'none', sm: 'none', md: 'inline-block' },
                      color: 'white',
                      width: '100%',
                      // border: '2px solid black',
                    }}
                    component={Link}
                    href='tel:+41765314652'
                  >
                    Appelez-nous : +41765314652
                  </Typography>
                  <IconButton
                    size='large'
                    edge='end'
                    color='inherit'
                    aria-label='call'
                    component={Link}
                    href='tel:+41765314652'
                    sx={{
                      mr: 2,
                      display: {
                        xs: 'inline-block',
                        sm: 'inline-block',
                        md: 'none',
                      },
                    }}
                  >
                    <PhoneCallback />
                  </IconButton>
                </Grid>
                <Grid size={{ xs: 6, sm: 6, md: 12 }}>
                  <Typography
                    variant='h6'
                    align='center'
                    sx={{
                      display: { xs: 'none', sm: 'none', md: 'inline-block' },
                      color: 'white',
                      width: '100%',
                      // border: '2px solid black',
                    }}
                    component={Link}
                    href='mailto:borminart@gmail.com'
                  >
                    Écrivez-nous: borminart@gmail.com
                  </Typography>
                  <IconButton
                    size='large'
                    edge='end'
                    color='inherit'
                    aria-label='call'
                    component={Link}
                    href='mailto:borminart@gmail.com'
                    sx={{
                      mr: 2,
                      display: {
                        xs: 'inline-block',
                        sm: 'inline-block',
                        md: 'none',
                      },
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
