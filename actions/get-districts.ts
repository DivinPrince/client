import axios from "axios";
import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/districts`;

const getDistricts = async (): Promise<Size[]> => {
  const res = await axios.get(URL);

  return res.data;
};

export default getDistricts;
