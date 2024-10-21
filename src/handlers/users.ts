import { Request, Response } from "express";
import { CreateUserDTO } from "../DTOs/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";

export const getUsers = (req: Request, res: Response) => {
	res.send(["users"]);
};

export const getUserById = (req: Request, res: Response) => {
	res.send({ user: "a" });
};

export const createUser = (
	req: Request<{}, {}, CreateUserDTO, CreateUserQueryParams>,
	res: Response
) => {};
