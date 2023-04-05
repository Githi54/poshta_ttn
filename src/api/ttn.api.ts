import axios from "axios";
import { TTN } from "../types/ttn.type";

const BASE_URL = "https://api.novaposhta.ua/v2.0/json/";
const API_KEY = "2614b0ce283e2d69a503b8331ee002b3";

type DATATYPE = {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties:
    | {
        Documents: {
          DocumentNumber: number;
        }[];
      }
    | {
      CityName: string;
      Language: string;
      Limit: number;
      Page: number;
      };
};

export const getTTNInfo = async (
  ttnNumber: number
): Promise<TTN | undefined> => {
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
    const response = await axios.post(BASE_URL, data);

    if (response.data.success) {
      return response.data.data[0];
    } else {
      return response.data.errors;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDepartmentsInfo = async (city: string, page = 1) => {
  const data: DATATYPE = {
    apiKey: API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: city,
      Language: 'ua',
      Limit: 20,
      Page: page,
    },
  };

  try {
    const response = await axios.post(BASE_URL, data);

    if (response.data.success) {
      return response.data;
    } else {
      return response.data.errors;
    }
  } catch (error) {
    console.log(error);
  }
};
