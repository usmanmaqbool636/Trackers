const express = require('express');
const router = express.Router();
const Track = require("../models/Track");
const requireAuth = require('../middlewares/requireAuth');


router.use(requireAuth)
router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id })
    res.json(tracks);
});
router.post('/tracks',async (req, res) => {
    const { name, locations } = req.body;
    if (!name || !locations) {
        res.status(422).json({ error: "you must provide name and locations" });
    }
    try {
        const track = new Track({ name, locations, userId: req.user._id })
        await track.save();
        return res.json(track);
    }
    catch (e) {
        return res.status(422).send(e.message);
    }
})
module.exports = router;