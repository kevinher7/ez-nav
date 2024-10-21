import { Request, Response } from "express";
import { getGoogleMapsRoutes } from "../services/routeServices";

// export const getAllRoutes = async (req: Request, res: Response) => {
// 	const originPoint = req.body["originPoint"];
// 	const destinationPoint = req.body["destinationPoint"];
// 	const transitMode = "transit";

// 	const allRoutesObject = await getGoogleMapsRoutes(
// 		originPoint,
// 		destinationPoint,
// 		transitMode
// 	);

// 	// console.log(allRoutesObject.data);

// 	res.status(200).send(allRoutesObject.data);
// };

export const getTrainSegment = () => {};

export const getWalkingSegment = () => {};
