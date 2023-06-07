import { Box, Button, Grid, Paper } from "@mui/material";

export interface AddressAttributes{
    id: number;
    street_number: string;
    street_name: string;
    city: string;
    country_id : number;
    importdate : string;
}

export let addresses : AddressAttributes[] = [
    {
        "id": 1,
        "street_number": "57",
        "street_name": "Glacier Hill Avenue",
        "city": "Torbat-e JÄ-m",
        "country_id": 95,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 2,
        "street_number": "86",
        "street_name": "Dottie Junction",
        "city": "Beaumont",
        "country_id": 37,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 3,
        "street_number": "292",
        "street_name": "Ramsey Avenue",
        "city": "Cayambe",
        "country_id": 60,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 4,
        "street_number": "5618",
        "street_name": "Thackeray Junction",
        "city": "Caldas",
        "country_id": 47,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 5,
        "street_number": "4",
        "street_name": "2nd Park",
        "city": "Ngunguru",
        "country_id": 153,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 6,
        "street_number": "387",
        "street_name": "Nancy Junction",
        "city": "Burirao",
        "country_id": 159,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 7,
        "street_number": "501",
        "street_name": "Atwood Point",
        "city": "Nirji",
        "country_id": 42,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 8,
        "street_number": "42",
        "street_name": "North Pass",
        "city": "TijÃ£o",
        "country_id": 164,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 9,
        "street_number": "83",
        "street_name": "Graceland Pass",
        "city": "Castelo de Vide",
        "country_id": 164,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 10,
        "street_number": "93",
        "street_name": "Clyde Gallagher Road",
        "city": "Shangde",
        "country_id": 42,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 11,
        "street_number": "604",
        "street_name": "Merrick Circle",
        "city": "Taluksangay",
        "country_id": 159,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 12,
        "street_number": "92233",
        "street_name": "Sundown Court",
        "city": "MontbÃ©liard",
        "country_id": 70,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 13,
        "street_number": "238",
        "street_name": "Corscot Alley",
        "city": "Trstenik",
        "country_id": 186,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 14,
        "street_number": "10441",
        "street_name": "Macpherson Point",
        "city": "Trairi",
        "country_id": 30,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 15,
        "street_number": "1",
        "street_name": "Stuart Avenue",
        "city": "Xiangshi",
        "country_id": 42,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 16,
        "street_number": "29",
        "street_name": "Spaight Plaza",
        "city": "Belle-Anse",
        "country_id": 88,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 17,
        "street_number": "252",
        "street_name": "Main Plaza",
        "city": "Moshenskoye",
        "country_id": 172,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 18,
        "street_number": "119",
        "street_name": "Morning Park",
        "city": "Esparza",
        "country_id": 50,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 19,
        "street_number": "5915",
        "street_name": "Dryden Alley",
        "city": "Quebradas",
        "country_id": 90,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 20,
        "street_number": "16676",
        "street_name": "Shelley Street",
        "city": "Mucuri",
        "country_id": 30,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 21,
        "street_number": "3",
        "street_name": "Warner Parkway",
        "city": "Holoubkov",
        "country_id": 55,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 22,
        "street_number": "66669",
        "street_name": "Surrey Trail",
        "city": "Chingas",
        "country_id": 158,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 23,
        "street_number": "2",
        "street_name": "Drewry Point",
        "city": "MiragoÃ¢ne",
        "country_id": 88,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 24,
        "street_number": "45",
        "street_name": "Haas Point",
        "city": "TimashÃ«vsk",
        "country_id": 172,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 25,
        "street_number": "5",
        "street_name": "Westerfield Parkway",
        "city": "Liwu",
        "country_id": 42,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 26,
        "street_number": "9",
        "street_name": "Paget Plaza",
        "city": "Oliveirinha",
        "country_id": 164,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 27,
        "street_number": "84",
        "street_name": "Troy Court",
        "city": "Turze Pole",
        "country_id": 163,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 28,
        "street_number": "8",
        "street_name": "Longview Avenue",
        "city": "Kliteh",
        "country_id": 92,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 29,
        "street_number": "55",
        "street_name": "Dorton Pass",
        "city": "Huangqiao",
        "country_id": 42,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 30,
        "street_number": "4",
        "street_name": "Clemons Trail",
        "city": "Aricapampa",
        "country_id": 158,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 31,
        "street_number": "33981",
        "street_name": "Milwaukee Way",
        "city": "Mesquite",
        "country_id": 217,
        "importdate": "2022-03-17T08:08:35Z"
    },
    {
        "id": 32,
        "street_number": "43758",
        "street_name": "Dahle Drive",
        "city": "Paipa",
        "country_id": 47,
        "importdate": "2022-03-17T08:08:35Z"
    }
]

function Address(prop : AddressAttributes) {
    
    return (
        <>
        <Grid item xs={3}>
        <Paper elevation={5} aria-setsize={5}>
        <div className='idFont'>Id: {prop.id}</div>
        <div className='addressInfofont'>Street Nr: {prop.street_number}</div>
        <div className='addressInfofont'>Street name: {prop.street_name}</div>
        <div className='addressInfofont'>City: {prop.city}</div>
        <div className='addressInfofont'>Country: {prop.country_id}</div>
        <div className='addressInfofont'>Import Date: {prop.importdate}</div>
        <Box  sx={{ '& button': { marginLeft: 1, marginTop: 2, marginBottom: 2}}}>
        <Button variant="outlined" size="small">View</Button>
        <Button variant="outlined" size="small">Update</Button>
        <Button variant="outlined" size="small">Delete</Button>
        </Box>
        </Paper>
        </Grid>
        </>
    )
}
export default Address;