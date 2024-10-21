import { Router } from "express";
import { createUser, getUserById, getUsers } from "../handlers/users";

const router = Router();

// /api/users
router.get("/", getUsers);

// /api/users/123
router.get("/:id", getUserById);

// /api/users
router.post("/", createUser);

export default router;
