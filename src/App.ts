import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./Router/userRouter";
class App {
  public express;
  constructor() {
    this.express = express();
    this.milldres();
    this.Database();
    this.Router();
  }
  private milldres(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }
  private Database(): void {
    mongoose
      .connect("mongodb://localhost/Api-NodeJs", { useNewUrlParser: true })
      .then(() => console.log("connect"));
  }
  private Router(): void {
    this.express.use(routes);
  }
}
export default new App().express;
