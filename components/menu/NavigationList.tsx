import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';

export default function NavigationList({
  toggleDrawer,
}: Readonly<{
  toggleDrawer: (
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}>) {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      onClick={() => toggleDrawer(false)}
    >
      <ListItemButton component={Link} href='/'>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={`Page d'accueil`} />
      </ListItemButton>

      <ListItemButton component={Link} href='/our-works/kafel'>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary='Tuile' />
      </ListItemButton>
      <ListItemButton component={Link} href='/our-works/stelaj'>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary='Étagère' />
      </ListItemButton>
      <ListItemButton component={Link} href='/contacts'>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary='Contacts' />
      </ListItemButton>
    </List>
  );
}
