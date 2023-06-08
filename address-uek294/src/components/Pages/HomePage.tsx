import { Container, Grid } from "@mui/material";
import Address, {
  AddressAttributes
} from "../../components/Address";
import SearchAppBar from "../Molecules/AppBar";
import Footer from "../Molecules/Footer";
import { useEffect, useState } from "react";
import AddressService from "../../services/AddressService";
import { error } from "console";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  const [addressList, setAddressList] = useState<AddressAttributes[]>([]);

  useEffect(() => {
      AddressService()
        .getAddress()
        .then((data) => {
          setAddressList(data);
        }).catch((error) => {
          console.log(error)
          navigate("/login")
        });
    }
  , []);

  return (
    <>
      <SearchAppBar />
      <div className="body">
        <Container sx={{ marginY: 5 }}>
          <Grid container spacing={5}>
            {addressList.map((address) => {
              return (
                <>
                  <Address
                    id={address?.id!}
                    street_number={address?.street_number!}
                    street_name={address?.street_name!}
                    city={address?.city!}
                    country_id={address?.country_id!}
                    importdate={address?.importdate!}
                  />
                </>
              );
            })}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
