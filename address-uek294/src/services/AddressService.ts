import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api"; 

const AddressService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAddress : async () => {
        const data = await api.get('');
        return data['data'][0]['url'];
    }
});

export default AddressService;