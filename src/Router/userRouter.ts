import { Router } from "express";
import userControls from "../controls/userControls";

const routes = Router();
routes.get("/texte", userControls.index);

export default routes;
