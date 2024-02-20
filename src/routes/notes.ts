import express from "express";
import * as NotesControll from "../controllers/notecontrollers";

const router = express.Router();

router.get("/", NotesControll.getNotes);

router.post("/", NotesControll.createNote);

router.get("/:noteId", NotesControll.getNote); // get only one specific note

export default router;