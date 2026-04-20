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
          🔧 Homme à tout faire – Intervention rapide !
        </Typography>
        <Typography variant='h3' align='center'>
          Bonjour 👋 Vous recherchez un professionnel sérieux, efficace et
          expérimenté pour vos travaux ?
        </Typography>
        <Typography variant='h3' align='center'>
          Avec plus de 10 ans d’expérience, je vous propose des prestations de
          qualité pour votre maison ou appartement.
        </Typography>
        <Typography variant='h2' align='center'>
          🛠️ Mes prestations :
        </Typography>
        <Typography variant='h3' align='center'>
          • Montage de meubles (IKEA, dressings, lits, cuisines)
        </Typography>
        <Typography variant='h3' align='center'>
          • Travaux intérieurs et extérieurs
        </Typography>
        <Typography variant='h3' align='center'>
          • Petits travaux et réparations
        </Typography>
        <Typography variant='h3' align='center'>
          • Pose de cloisons et plafonds en placo
        </Typography>
        <Typography variant='h3' align='center'>
          • Enduit et préparation des murs
        </Typography>
        <Typography variant='h3' align='center'>
          • Installation de douches et baignoires
        </Typography>
        <Typography variant='h3' align='center'>
          • Pose et remplacement de robinetterie
        </Typography>
        <Typography variant='h3' align='center'>
          • Installation de lavabos et WC
        </Typography>
        <Typography variant='h3' align='center'>
          • Pose de carrelage
        </Typography>
        <Typography variant='h3' align='center'>
          • Peinture murs et plafonds
        </Typography>
        <Typography variant='h3' align='center'>
          • Installation de luminaires, rideaux, étagères
        </Typography>
        <Typography variant='h3' align='center'>
          • Pose et remplacement de portes (intérieures et d’entrée)
        </Typography>
        <Typography variant='h3' align='center'>
          • Tous travaux de bricolage et rénovation
        </Typography>
        <Typography variant='h2' align='center'>
          ⭐️ Pourquoi me choisir ?
        </Typography>
        <Typography variant='h3' align='center'>
          ✔️ Travail propre et soigné
        </Typography>
        <Typography variant='h3' align='center'>
          ✔️ Intervention rapide
        </Typography>
        <Typography variant='h3' align='center'>
          ✔️ Ponctualité garantie
        </Typography>
        <Typography variant='h3' align='center'>
          ✔️ Prix transparents et honnêtes
        </Typography>
        <Typography variant='h3' align='center'>
          ✔️ Disponible le week-end
        </Typography>
        <Typography variant='h3' align='center'>
          ✔️ Clients satisfaits
        </Typography>
        <Typography variant='h3' align='center'>
          📞 Contactez-moi en message privé — réponse rapide !
        </Typography>

        <Typography variant='h3' align='center'>
          Réparation et construction
        </Typography>
        <Typography variant='h5' align='center'>
          Notre entreprise propose des services de réparation et de construction
          aux entreprises et aux particuliers.
        </Typography>
      </Grid>

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
