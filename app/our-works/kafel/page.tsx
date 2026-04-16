'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';

import Grid from '@mui/material/Grid';

const images = [
  {
    src: '001_.jpeg',
    alt: 'kafel_001_',
  },
  {
    src: '002_.jpeg',
    alt: 'kafel_002_',
  },
  {
    src: '003_.jpeg',
    alt: 'kafel_003_',
  },
  {
    src: '004_.jpeg',
    alt: 'kafel_004_',
  },
  {
    src: '005_.jpeg',
    alt: 'kafel_005_',
  },
  {
    src: '006_.jpeg',
    alt: 'kafel_006_',
  },
  {
    src: '007_.jpeg',
    alt: 'kafel_007_',
  },
  {
    src: '008_.jpeg',
    alt: 'kafel_008_',
  },
  {
    src: '009_.jpeg',
    alt: 'kafel_009_',
  },
  {
    src: '010_.jpeg',
    alt: 'kafel_010_',
  },
  {
    src: '011_.jpeg',
    alt: 'kafel_011_',
  },
  {
    src: '012_.jpeg',
    alt: 'kafel_012_',
  },
  {
    src: '013_.jpeg',
    alt: 'kafel_013_',
  },
  {
    src: '014_.jpeg',
    alt: 'kafel_014_',
  },
  {
    src: '015_.jpeg',
    alt: 'kafel_015_',
  },
  {
    src: '016_.jpeg',
    alt: 'kafel_016_',
  },
  {
    src: '017_.jpeg',
    alt: 'kafel_017_',
  },
  {
    src: '018_.jpeg',
    alt: 'kafel_018_',
  },
  {
    src: '019_.jpeg',
    alt: 'kafel_019_',
  },
  {
    src: '020_.jpeg',
    alt: 'kafel_020_',
  },
  {
    src: '021_.jpeg',
    alt: 'kafel_021_',
  },
  {
    src: '022_.jpeg',
    alt: 'kafel_022_',
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
    <Grid container spacing={4} sx={{ margin: `0 auto` }}>
      {images.map((image, index) => (
        <Grid
          key={`${image.src}-${index}`}
          sx={{
            margin: `0 auto`,
            width: `600px`,
            height: '450px',
            position: 'relative',
          }}
        >
          <Image
            src={`/my_images/kafel/${image.src}`}
            alt={image.alt}
            fill
            loading='eager'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </Grid>
      ))}
    </Grid>
  );
}
