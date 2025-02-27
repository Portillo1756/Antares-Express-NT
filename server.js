const express = require('express');
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')
const PORT = process.env.PORT || 3005;

const app = express();

// express middleware will always run the operation in the order from
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api_routes)
app.use("/", html_routes)


app.listen(PORT, () => {
    console.log(`Server running on`)
}) ;