import { Box, Typography } from '@mui/material';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <Box className={styles.container}>
            <Typography variant="h4" className={styles.heading}>About Us</Typography>
            <Typography>We are finance Company.We provide help related to your finance</Typography>
        </Box>
    );
};

export default AboutUs;

