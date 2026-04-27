'use client';

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ResponsiveNextImageGallery from '@/components/showPhotos/ResponsiveNextImageGallery';

const galaryImages = [
  // {
  //   src: 'Vizitka_1.jpg',
  //   alt: `   `,
  // },
  {
    src: 'Vizitka_2.jpg',
    alt: ` bormin renovation`,
  },
];

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
        <ResponsiveNextImageGallery
          galaryImages={galaryImages}
          imgFolderPath='/my_images/vizitka/'
        />
        <Typography variant='h6' align='center'>
          🔨 Artisan polyvalent en Suisse — travail soigné, fiable et dans les
          délais
        </Typography>

        <Typography variant='body1'>
          Je propose une large gamme de travaux de construction et de
          rénovation, de toute complexité. Grande expérience, précision et sens
          des responsabilités dans chaque projet.
        </Typography>
        <Typography variant='h6'>Mes services :</Typography>
        <Typography variant='body1'>
          • Travaux de plomberie (installation, réparation, raccordement)
        </Typography>
        <Typography variant='body1'>
          • Installation et remplacement de fenêtres et de portes
        </Typography>
        <Typography variant='body1'>• Réparation de toitures</Typography>
        <Typography variant='body1'>
          • Travaux en plaques de plâtre (cloisons, plafonds, habillage)
        </Typography>
        <Typography variant='body1'>
          • Travaux de peinture (peinture, enduits, préparation des surfaces)
        </Typography>
        <Typography variant='body1'>
          • Finitions décoratives (y compris effet « brique »)
        </Typography>
        <Typography variant='body1'>
          • Pose de carrelage (salles de bains, cuisines, etc.)
        </Typography>
        <Typography variant='body1'>
          • Pose de sols (stratifié, parquet)
        </Typography>
        <Typography variant='body1'>• Sols autonivelants</Typography>
        <Typography variant='body1'>• Montage de meubles</Typography>
        <Typography variant='body1'>
          • Rénovation intérieure clé en main
        </Typography>
        <Typography variant='h6'>En plus :</Typography>
        <Typography variant='body1'>• Travaux de démolition</Typography>
        <Typography variant='body1'>
          • Isolation thermique et travaux d’étanchéité
        </Typography>
        <Typography variant='body1'>
          • Petits travaux et réparations à domicile
        </Typography>
        <Typography variant='body1'>
          Travail propre et soigné, sans coûts inutiles et dans le respect des
          délais.
        </Typography>
        <Typography variant='body1'>
          Approche individuelle pour chaque client.
        </Typography>
        <Typography variant='h5'>
          📞 Contactez-moi pour une consultation et une estimation.
        </Typography>
      </Grid>
    </Grid>
  );
}
