import { addPlaylist, getPlaylist } from "../Controllers/playlist.controller.js";
import express from "express";
import { isAuthenticated } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.route("/addplaylist").post(isAuthenticated, addPlaylist)
router.route("/getplaylist").get(isAuthenticated, getPlaylist);


export default router;
