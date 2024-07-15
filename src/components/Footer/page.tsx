import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2" className={styles.footerText}>
        &copy; {new Date().getFullYear()} Microfinance. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
