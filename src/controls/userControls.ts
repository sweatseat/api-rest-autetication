import User from "../Shema/User";
import { Request, Response } from "express";
class userControls {
  public async index(req: Request, res: Response): Promise<Response> {
    const Lista = await User.find();

    return res.json(Lista);
  }
}

export default new userControls();
