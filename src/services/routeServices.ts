import axios, { AxiosResponse } from "axios";
import { getAllRoutesDTO } from "../DTOs/GetAllRoutes.dto";

export const getGoogleMapsRoutes = async (
	originPoint: string,
	destinationPoint: string,
	transitMode: string
): Promise<AxiosResponse> => {
	const apiURL = `https://maps.googleapis.com/maps/api/directions/json?destination=${destinationPoint}&origin=${originPoint}&transit_mode=${"train"}&mode=${transitMode}&key=${
		process.env.GOOGLE_MAPS_API_KEY
	}`;

	const mapsResponse: AxiosResponse = await axios.get(apiURL);

	console.log(mapsResponse.data);

	return mapsResponse;
};
