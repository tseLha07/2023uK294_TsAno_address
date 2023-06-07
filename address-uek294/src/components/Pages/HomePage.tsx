import { Container, Grid } from '@mui/material';
import Address, { addresses } from '../../components/Address';
import SearchAppBar from '../Molecules/AppBar';
import Footer from '../Molecules/Footer';

function HomePage() {
  return (
    <>
    <SearchAppBar />
    <div className='body'>
    <Container sx={{marginY : 5}}>
    <Grid container spacing={5}>
    {
      addresses.map( address => {
        return <>
        <Address id={address.id} street_number={address.street_number} street_name={address.street_name} city={address.city} country_id={address.country_id} importdate={address.importdate} />
        <p></p>
        </>
      })
    }
    </Grid>
    </Container>
    </div>
    <Footer />
    </>
  );
}

export default HomePage;
