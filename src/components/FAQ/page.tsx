import { Box, Typography } from '@mui/material';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <Box className={styles.faq}>
      <Typography variant="h4" className={styles.title}>FAQ</Typography>
    </Box>
  );
};

export default FAQ;
