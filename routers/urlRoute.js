const Router = require("express");
const router = Router();
const { posturl, getShortenedUrl } = require("../controllers/urlController");

router.route("/posturl").post(posturl);
router.route("/geturl/:id").get(getShortenedUrl);

module.exports = router;
