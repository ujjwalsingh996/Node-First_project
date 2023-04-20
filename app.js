const express = require("express");
const bodyParser = require("body-parser");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/admin', adminRoutes);
// app.use('/shop', shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>')
// })

const loginRoutes = require("./routes/login")
const messageRoute = require("./routes/message")

app.use(loginRoutes);
app.use(messageRoute)
app.listen(5000);
