import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import usersRouter from "./routes/users";
import routeRouter from "./routes/route";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/routes", routeRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send("hi");
});

app.listen(PORT, () => {
	console.log(
		`Server running on http://${process.env.SERVER_HOSTNAME}:${PORT}`
	);
});
