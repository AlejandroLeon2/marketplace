import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Servidor corriendot");
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
});