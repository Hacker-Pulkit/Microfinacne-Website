import { Container, Box, Typography } from '@mui/material';
import Header from '../components/Header/page';
import AboutUs from '../components/AboutUs/page';
import ApplicationProcess from '../components/ApplicationProcess/page';
import FAQ from '../components/FAQ/page';
import Footer from '../components/Footer/page';


const Home = () => {
    return (
        <Container>
            <Header />
            <Box my={4}>
                <AboutUs />
                <ApplicationProcess />
                <FAQ />
            </Box>
            <Footer />
        </Container>
    );
};

export default Home;