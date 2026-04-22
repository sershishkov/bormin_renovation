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
    alt: `Pose de carrelage`,
  },
  {
    src: '002_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '003_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '004_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '005_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '006_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '007_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '008_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '009_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '010_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '011_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '012_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '013_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '014_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '015_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '016_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '017_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '018_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '019_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '020_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '021_.jpeg',
    alt: `Pose de carrelage`,
  },
  {
    src: '022_.jpeg',
    alt: `Pose de carrelage`,
  },
];

export default function Kafel() {
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
        imgFolderPath='/my_images/kafel/'
      />
    </Grid>
  );
}
