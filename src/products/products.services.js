const productControllers = require("./products.controllers");

const getAllProducts = (req, res) => {
    productControllers
        .findAllProducts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: "Bad request", err });
        });
};

const getProductById = (req, res) => {
    const id = req.params.id;
    productControllers
        .findProductById(id)
        .then((data) => {
            if (!data) {
                res.status(404).json({ message: "invalid id " });
            } else {
                res.status(200).json(data);
            }
        })
        .catch((err) => {
            res.status(400).json({ message: "Bad request", err });
        });
};

const postProduct = (req, res) => {
    const ProdObj = req.body;
    productControllers
        .createProduct(ProdObj)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: "Bad request", err });
        });
};

const patchProduct = (req, res) => {
    const id = req.params.id;
    const prodObj = req.body;

    productControllers
        .createProduct(id, prodObj)
        .then((data) => {
            if (!data) {
                res.status(404).json({ message: "invalid id" });
            } else {
                res.status(200).json(data);
            }
        })
        .catch((err) => {
            res.status(400).json({ message: "Bad request", err });
        });
};

const deleteProduct = (req, res) => {
    const id = req.params.id;
    productControllers
        .deleteProduct(id)
        .then((data) => {
            if (!data) {
                res.status(404).json({ message: "invalid id" });
            } else {
                res.status(204).json();
            }
        })
        .catch((err) => {
            res.status(400).json({ message: "Bad request", err });
        });
};

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    patchProduct,
    deleteProduct,
};
