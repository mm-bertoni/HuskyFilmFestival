import express from "express";
import FilmDB from "../FilmsDB";
// Router to get the list of all Films
const router = express.Router();

router.use(express.urlencoded({extended: true}));

// Looks for post requests to delete something
router.post("/deleteFilm", (req,res)=>{
    FilmDB.deleteFilm(req.body.director, req.body.title, req.body.genre, req.body.screener);
    console.log("Deleted Film:", req.body.title);

});

export default router; 