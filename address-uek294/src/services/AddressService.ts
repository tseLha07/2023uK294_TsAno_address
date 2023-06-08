import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { AddressAttributes } from "../components/Address";

const AddressService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAddress: async () => {
    const data = await api.get('address?_limit=20');
    return data["data"];
  },

  deleteAddress: async (id: number) => {
    const data = await api.delete("address/${id}");
    return data["data"];
  },
  getAddressByID: async (id: number) => {
    const data = await api.get(`address/${id}`);
    return data["data"];
  },
  postAddress: async (address : AddressAttributes ) => {
    const data = await api.post('address', {"street_number": address.street_number, "street_name": address.street_name, "city": address.city, "country_id": address.country_id, "importdate": address.importdate});
    return data["data"]
  },
  putAddress: async (address : AddressAttributes ) => {
    const data = await api.post('address', {"id": address.id,"street_number": address.street_number, "street_name": address.street_name, "city": address.city, "country_id": address.country_id, "importdate": address.importdate});
    return data["data"]
  }
});

export default AddressService;
