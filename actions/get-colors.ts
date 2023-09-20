import axios from 'axios'
import { Color } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await axios.get(URL);

  return res.data;
};

export default getColors;
