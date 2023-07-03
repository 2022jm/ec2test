import { Router } from "express";
import {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    login,
    refreshToken,
} from "../controllers/auth.controller";

const router = Router();

// Routes

router.post("/api/auth/login", login);
router.post("/api/auth/refresh", refreshToken);

router.get("/api/user/:id", getUser);
router.get("/api/user", getAllUsers);
router.post("/api/user", createUser);
router.put("/api/user/:id", updateUser);
router.delete("/api/user/:id", deleteUser);

export default router;
