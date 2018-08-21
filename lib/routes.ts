import { Request, Response } from "express";
import { exchange } from './exchanger';

export class Routes {
  public routes(app): void {
    app.route("/exchange").get((req: Request, res: Response) => {
      const { from, to, amount } = req.query;
      
      if (!from || !to || !amount) {
          res.status(400).send({message: "Missing required parameter"})
      } else if (from !== 'USD') {
        res.status(400).send({message: "The underlying api only allows conversion from non usd currencies if you pay :("})
      }
      
      const result = exchange(from, to, amount);

      res.status(200).send({
        message: result
      });
    });
  }
}
