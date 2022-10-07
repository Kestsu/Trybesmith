import { Request, Response } from 'express';
import connection from '../models/connection';
import OrdersModel from '../models/OrdersModel';

export default class Orders {
  service;

  constructor() {
    this.service = new OrdersModel(connection);
  }

  listaPedidos = async (req: Request, res: Response) => {
    const result = await this.service.ListAllOrders();
    return res.status(200).json(result);
  };
}