import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address, { AttributesAddress } from './component/Address';


function App() {

  let addresses : AttributesAddress[] = [
    {
      id: 953,
      street_number: "4683",
      street_name: "Lakewood Road",
      city: "Cai Doi Vam",
      country_id: 221,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 954,
      street_number: "0",
      street_name: "Mariners Cove Road",
      city: "Kostino",
      country_id: 172,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 955,
      street_number: "874",
      street_name: "Stone Corner Lane",
      city: "Xinhua",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 956,
      street_number: "852",
      street_name: "Cherokee Junction",
      city: "Silao",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 957,
      street_number: "2621",
      street_name: "Boyd Way",
      city: "Talok",
      country_id: 92,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 958,
      street_number: "36",
      street_name: "Lunder Drive",
      city: "Jiujiang",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 959,
      street_number: "1857",
      street_name: "Schiller Point",
      city: "Heâ€™an",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 960,
      street_number: "5",
      street_name: "Prentice Plaza",
      city: "Tanbuqiao",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 961,
      street_number: "595",
      street_name: "Moulton Circle",
      city: "Terawas",
      country_id: 92,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 962,
      street_number: "6",
      street_name: "School Road",
      city: "TimrÃ¥",
      country_id: 194,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 963,
      street_number: "2699",
      street_name: "Lakeland Road",
      city: "Geneng Tengah",
      country_id: 92,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 964,
      street_number: "4",
      street_name: "Jay Avenue",
      city: "Nkoteng",
      country_id: 44,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 965,
      street_number: "81",
      street_name: "Hintze Trail",
      city: "Debarkâ€™",
      country_id: 66,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 966,
      street_number: "3788",
      street_name: "Vidon Hill",
      city: "Sarmanovo",
      country_id: 172,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 967,
      street_number: "5777",
      street_name: "Homewood Avenue",
      city: "Pueblo Nuevo",
      country_id: 158,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 968,
      street_number: "4519",
      street_name: "Nova Parkway",
      city: "Huangjing",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 969,
      street_number: "4334",
      street_name: "Manufacturers Park",
      city: "AnarÃ¡chi",
      country_id: 82,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 970,
      street_number: "84",
      street_name: "Harbort Drive",
      city: "Potikosin",
      country_id: 92,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 971,
      street_number: "4",
      street_name: "Talmadge Terrace",
      city: "Qiman",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 972,
      street_number: "616",
      street_name: "Kinsman Point",
      city: "Fukou",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 973,
      street_number: "19539",
      street_name: "Bonner Avenue",
      city: "Fort Lauderdale",
      country_id: 217,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 974,
      street_number: "9149",
      street_name: "Vera Parkway",
      city: "Hoi",
      country_id: 92,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 975,
      street_number: "5143",
      street_name: "Sommers Street",
      city: "áº¤p TÃ¢n NgÃ£i",
      country_id: 221,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 976,
      street_number: "0",
      street_name: "Morrow Park",
      city: "Shchukino",
      country_id: 172,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 977,
      street_number: "56111",
      street_name: "Garrison Plaza",
      city: "Bibirevo",
      country_id: 172,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 978,
      street_number: "5287",
      street_name: "Fairfield Plaza",
      city: "Sungi Liput",
      country_id: 92,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 979,
      street_number: "723",
      street_name: "Bashford Pass",
      city: "Narok",
      country_id: 107,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 980,
      street_number: "4400",
      street_name: "Cordelia Park",
      city: "Bogorame",
      country_id: 92,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 981,
      street_number: "1",
      street_name: "Randy Terrace",
      city: "Kuala Lumpur",
      country_id: 127,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 982,
      street_number: "21",
      street_name: "Clyde Gallagher Parkway",
      city: "Dapitan",
      country_id: 159,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 983,
      street_number: "36242",
      street_name: "Caliangt Trail",
      city: "Tongole",
      country_id: 181,
      importdate: "2022-03-17T08:08:35Z",
    },
    {
      id: 984,
      street_number: "9",
      street_name: "Vahlen Way",
      city: "Qilin",
      country_id: 42,
      importdate: "2022-03-17T08:08:35Z",
    }
  ]

  return (
    <>
    {
      addresses.map( address =>{
        return <>
        <p></p>
        <Address id={address.id} street_number={address.street_number} street_name={address.street_name} city={address.city} country_id={address.country_id} importdate={address.importdate} />
        </>
      })
    }
    </>
  );
}
export default App;

