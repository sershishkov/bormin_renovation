'use client';
import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';

import ResponsiveNextImageGallery from '@/components/showPhotos/ResponsiveNextImageGallery';

const galaryImages = [
  {
    src: '001_.jpeg',
    alt: `installation d'un rack`,
  },
  {
    src: '002_.jpeg',
    alt: `installation d'un rack`,
  },
  {
    src: '003_.jpeg',
    alt: `installation d'un rack`,
  },
  {
    src: '004_.jpeg',
    alt: `installation d'un rack`,
  },
  {
    src: '005_.jpeg',
    alt: `installation d'un rack`,
  },
  {
    src: '006_.jpeg',
    alt: `installation d'un rack`,
  },
  {
    src: '007_.jpeg',
    alt: `installation d'un rack`,
  },
  {
    src: '008_.jpeg',
    alt: `installation d'un rack`,
  },
];

export default function Stelaj() {
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
    <Grid container sx={{ margin: `0 auto`, flexDirection: 'column' }}>
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
      <Typography variant='h4' align='center' sx={{ mb: 4, mt: 2 }}>
        {`Installation d'un rack`}
      </Typography>
      <ResponsiveNextImageGallery
        galaryImages={galaryImages}
        imgFolderPath='/my_images/stelaj/'
      />
    </Grid>
  );
}
