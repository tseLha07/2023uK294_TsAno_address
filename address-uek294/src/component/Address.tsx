import React from "react";


export interface AttributesAddress {
  id: number;
  street_number: string;
  street_name: string;
  city: string;
  country_id: number;
  importdate: string;
}

function Address(prop : AttributesAddress) {
    
  return (
  <>
  <div>ID: {prop.id}</div> 
  <div>Street Nr:{prop.street_number}</div>
  <div>Street name:{prop.street_name}</div>
  <div>City: {prop.city}</div>
  <div>Country: {prop.country_id}</div>
  <div>Import Date: {prop.importdate}</div>
  
  </>
  );
}

export default Address;
