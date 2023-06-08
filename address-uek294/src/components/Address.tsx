import { Box, Button, Grid, Paper } from "@mui/material";
import AddressService from "../services/AddressService";
import { Link } from "react-router-dom";

export interface AddressAttributes{
    id: number;
    street_number: string;
    street_name: string;
    city: string;
    country_id : number;
    importdate : string;
}

function Address(prop : AddressAttributes) {

    const handleDeleteButton = () =>{
        AddressService().deleteAddress(prop.id);
    }
    const handleViewButton = () =>{
        AddressService().getAddressByID(prop.id);
    }   
     const handleUpdateButton = () =>{
        AddressService().putAddress(prop);
    }

    return (
        <>
        <Grid item xs={3}>
        <Paper elevation={5} aria-setsize={5}>
        <span className='idFont'>Id: {prop.id}</span> <br />
        <span className='addressInfofont'>Street Nr: {prop.street_number}</span><br />
        <span className='addressInfofont'>Street name: {prop.street_name}</span><br />
        <span className='addressInfofont'>City: {prop.city}</span><br />
        <span className='addressInfofont'>Country: {prop.country_id}</span><br />
        <span className='addressInfofont'>Import Date: {prop.importdate}</span><br />
        <Box  sx={{ '& button': { marginLeft: 1, marginTop: 2, marginBottom: 2}}}>
        <Link to={`/address/${prop.id}`}><Button variant="outlined" size="small" onClick={handleViewButton}>View</Button></Link>
        <Button variant="outlined" size="small" onClick={handleUpdateButton}>Update</Button>
        <Button variant="outlined" size="small" onClick={handleDeleteButton}>Delete</Button>
        </Box>
        </Paper>
        </Grid>
        </>
    )
}
export default Address;