const Router = require("express");
const router = Router();
const { posturl, getShortenedUrl } = require("../controllers/urlController");

router.route("/posturl").post(posturl);
router.get("/geturl/:shortId", getShortenedUrl);

module.exports = router;
