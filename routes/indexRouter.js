const { Router } = require("express");

const indexRouter = Router();
const dbController = require("../controllers/dbController.js");

  




indexRouter.get("/", dbController.getMessages);


indexRouter.get("/details/:id",dbController.getMessage);


indexRouter.get("/new", (req,res) => {
    res.render("form")
})

indexRouter.post("/new",dbController.createMessage);

module.exports = indexRouter;