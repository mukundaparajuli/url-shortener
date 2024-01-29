const Router = require("express");
const router = Router();
const urlController  = require("../controllers/urlController")
router.route("/").get(urlController)

module.exports = router;
