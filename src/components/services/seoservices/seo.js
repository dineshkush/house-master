import axios from "axios";
import { base_url } from "../../../environment/apiconfig";
export const getSeo = async (path) => {
    try {
      const { data } = await axios.get(`${base_url}api/user/seo/${path}`);
      return data.data;
   
    } catch (error) {
      console.log(error.message);
    }
  };