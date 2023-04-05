import axios from "axios";
import { TTN } from "../types/ttn.type";

const BASEURL = "https://api.novaposhta.ua/v2.0/json/";
const API_KEY = "2614b0ce283e2d69a503b8331ee002b3";

type DATATYPE = {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties: {
    Documents: {
      DocumentNumber: number;
    }[];
  };
};

export const getTTNInfo = async (ttnNumber: number): Promise<TTN | undefined> => {
  const data: DATATYPE = {
    apiKey: API_KEY,
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: ttnNumber,
        },
      ],
    },
  };

  try {
    const response = await axios.post(BASEURL, data);

    if (response.data.success) {
        return response.data.data[0];
      } else {
        return response.data.errors;
      }
  } catch (error) {
    console.log(error);
  }
};
