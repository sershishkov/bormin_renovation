'use client';

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';

import { weCanDo } from '@/constants/description_weCanDo';

export default function Home() {
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
    <Grid container spacing={4} sx={{ margin: `0 auto`, maxWidth: `1200px` }}>
      <Grid sx={{ flexGrow: 1 }}>
        <Typography variant='h3' align='center'>
          Réparation et construction
        </Typography>
        <Typography variant='h5' align='center'>
          Notre entreprise propose des services de réparation et de construction
          aux entreprises et aux particuliers.
        </Typography>
      </Grid>

      <Grid sx={{ flexGrow: 1 }}>
        <Typography variant='h5' align='center'>
          Nos principaux domaines d`activité :
        </Typography>
      </Grid>

      {weCanDo.map((item) => (
        <Grid
          key={item.workName}
          sx={{
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Link href={item.link}>
            <Typography variant='h6' align='center'>
              {item.workName}
            </Typography>
          </Link>
          <List>
            <Grid
              container
              sx={{
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              {item.works.map((work) => (
                <Grid key={work} size={12} sx={{ margin: `0 auto` }}>
                  <ListItem>
                    <Typography
                      variant='body2'
                      align='center'
                      sx={{ width: '100%' }}
                    >
                      {work}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Grid>
      ))}
    </Grid>
  );
}
