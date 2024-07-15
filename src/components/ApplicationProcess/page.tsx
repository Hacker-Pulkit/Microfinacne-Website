import { Box, Typography } from '@mui/material';
import ApplicationForm from '../ApplicationForm/page';
import styles from './ApplicationProcess.module.css';

const ApplicationProcess = () => {
  return (
    <Box className={styles.applicationProcess}>
      <Typography variant="h4" className={styles.title}>Application Process</Typography>
      <Typography>
                Our application process is simple and straightforward. Follow the steps to apply for our services.
      </Typography>
      <ApplicationForm />
    </Box>
  );
};

export default ApplicationProcess;
