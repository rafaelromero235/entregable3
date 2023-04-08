const express = require("express");

const { port } = require("../config");
const db = require("./utils/database");
const productRouter = require("./products/products.router");

const app = express();

db.authenticate()
    .then(() => {
        console.log("database aunthenticated");
    })
    .catch((err) => {
        console.log(err);
    });

db.sync()
    .then(() => {
        console.log("database synced");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server OK" });
});

app.use("/api/v1/products", productRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
