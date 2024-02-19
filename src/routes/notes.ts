import express from "express";
import * as NotesControll from "../controllers/notecontrollers";

const router = express.Router();

router.get("/", NotesControll.getNotes);

export default router;