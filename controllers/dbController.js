const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", { title: "Mini Message Board", messages });
}

async function getMessage(req, res) {
  const id = req.params.id;

  const message = await db.getMessage(id);

  res.render("detail", { message });
}




async function createMessage(req, res) {
  console.log(req.body.message,req.body.username);
  await db.createNewMessage(req.body.message, req.body.username);

  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessage,
  getMessage
};
