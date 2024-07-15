import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from './Header.module.css';

const Header = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" className={styles.title}>
          MICROFINANCE COMPANY LIMITED
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;