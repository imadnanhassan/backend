import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("Server listening on https://localhost:5000 ");
});

const DATABASE_URL =
  "mongodb+srv://abulhassandev:XXbACmLjE9g86pie@cluster0.dcq1cxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(DATABASE_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

// /XXbACmLjE9g86pie
// abulhassandev
