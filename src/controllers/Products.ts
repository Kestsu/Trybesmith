import { Request, Response } from 'express';
import ProductsModel from '../models/ProductsModel';
import connection from '../models/connection';

export default class Products {
  service;

  constructor() {
    this.service = new ProductsModel(connection);
  }

  cadastrarProduto = async (req: Request, res: Response) => {
    const result = await this.service.PostNewProduct(req.body);
    return res.status(201).json(result);
  };

  listarProduto = async (req: Request, res: Response) => {
    const result = await this.service.ListAllProducts();
    return res.status(200).json(result);
  };
}