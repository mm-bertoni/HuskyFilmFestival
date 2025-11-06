import express from "express";
import FilmDB from "../FilmsDB";
// Router to get the list of all Films
const router = express.Router();

router.get("/countFilms", async(req, res)=>{
    try {
        const total = await FilmDB.countFilms();
        res.json({
            filmCount: total,
        });
    } catch (error) {
        console.error("Error getting film count", error);
    }
});

export default router; 