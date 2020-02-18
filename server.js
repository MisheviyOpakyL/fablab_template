const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json({ extended: true }));

app.use("/", express.static(path.join(__dirname, "client")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(PORT, () => {
    console.log("app running on port " + PORT)
});
