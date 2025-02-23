const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  




indexRouter.get("/", (req,res) => {
    res.render("index", { title: "Mini Message Board",messages })
})

indexRouter.get("/new", (req,res) => {
    res.render("form")
})

indexRouter.post("/new", (req,res) => {
   messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
   })
})

module.exports = indexRouter;