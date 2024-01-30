const Router = require("express");
const router = Router();
const urlController = require("../controllers/urlController")
router.route("/api/postUrl").post(urlController)

module.exports = router;
