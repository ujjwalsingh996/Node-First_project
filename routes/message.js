const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("username.txt", (err, data) => {
    if(err) {
        console.log(err)
    }
    else {
        res.send(
            `${data}
            <form action="/"  method="POST" onSubmit="document.getElementById('username').value = localStorarge.getItem('username')">
            <input type="text" name="message" id="message">
            <input type="hidden" name="username" id="username">
            </br>
            <button type="submit">Send</button></form>`
          );
    }
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.message);
  fs.writeFile(
    "username.txt",
    `${req.body.username}: ${req.body.message}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

module.exports = router;
