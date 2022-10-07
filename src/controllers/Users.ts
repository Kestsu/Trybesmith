import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/UserService';

export default class Users {
  service;

  constructor() {
    this.service = new UserService(jwt);
  }

  cadastrarUsuario = async (req: Request, res: Response) => {
    const result = await this.service.newUser(req.body);
    return res.status(201).json({ token: result });
  };
}