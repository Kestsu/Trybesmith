import { Request, Response, NextFunction } from 'express';
import UsersModel from '../models/UsersModel';
import connection from '../models/connection';

export default class LoginValidation {
  service;

  constructor() {
    this.service = new UsersModel(connection);
  }

  validar = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const retornoModel = await this.service.ListAllUsers();
    const result = retornoModel.find((item) => item.username === username 
    && item.password === password);

    if (!result) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    next();
  };
}
