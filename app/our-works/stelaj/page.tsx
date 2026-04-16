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
            src={`/my_images/stelaj/${image.src}`}
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
