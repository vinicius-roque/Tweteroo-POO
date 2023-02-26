import express from "express";
import { createTweet, getTweetsOfUser, getTweets } from "../controllers/tweetsController.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweets/:username", getTweetsOfUser);
router.get("/tweets", getTweets);

export default router;