import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/LoginService';

export default class Login {
  service;

  constructor() {
    this.service = new LoginService(jwt);
  }

  Logar = async (req: Request, res: Response) => {
    const result = await this.service.LoginEnter(req.body);
    return res.status(200).json({ token: result });
  };
}