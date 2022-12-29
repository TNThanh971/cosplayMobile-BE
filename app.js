require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/users/user.router");
const productRouter = require("./api/products/product.router");
const invoiceRouter = require("./api/invoices/invoice.router");
const invoiceDetailRouter = require("./api/invoicesdetails/invoicedetails.router");

const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// app.use(express.json());


app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/invoices", invoiceRouter);
app.use("/api/invoices-detail", invoiceDetailRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on PORT: ", process.env.APP_PORT);
});