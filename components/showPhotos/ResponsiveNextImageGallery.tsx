import Image from 'next/image';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Paper,
} from '@mui/material';

export default function ResponsiveNextImageGallery({
  galaryImages,
  imgFolderPath,
}: Readonly<{
  galaryImages: { src: string; alt: string }[];
  imgFolderPath: string;
}>) {
  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        mb: { xs: 3, sm: 4, md: 6 },
        borderRadius: 2,
      }}
    >
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
        {galaryImages.map((img, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={img.src + index}>
            <CardActionArea>
              <Card
                sx={{ borderRadius: 2, overflow: 'hidden', height: '100%' }}
              >
                {/* Обёртка relative для fill */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 180, sm: 220, md: 260 },
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={`${imgFolderPath}${img.src}`}
                    alt={img.alt}
                    fill
                    sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw'
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    loading='eager'
                  />
                </Box>
                <CardContent sx={{ p: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    {img.alt}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
