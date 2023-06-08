import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const AuthorizationService = (api: AxiosInstance = defaultAxiosInstance) => ({

    getAuthorization : async (email : string, password : string) => {
        const input = {
            email : email,
            password : password
        }

        const data = await api.post('login', input);
        return data['data']['accessToken'];
    }
});

export default AuthorizationService;