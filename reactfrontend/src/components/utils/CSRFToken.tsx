import axios from "axios";
import { ApiRoot } from "./Utils";

export const fetchCSRFToken = async () => {
    try {
        const response = await axios.get(`${ApiRoot()}csrf_token`);
        const { csrfToken } = response.data;
        return csrfToken;
    } catch (error) {
        console.log(error);
    }
}