const router = require("express").Router();
const videoRoutes = require("./videos");

// video routes
router.use("/videos", videoRoutes);

module.exports = router;
