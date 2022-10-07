import { ResultSetHeader, Pool } from 'mysql2/promise';
import { IProduct, IAllProduct } from '../interfaces/index';

export default class ProductsModel {
  public connectionAPI : Pool;

  constructor(connection: Pool) {
    this.connectionAPI = connection;
  }

  async PostNewProduct(body: Omit<IProduct, 'id'>): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)';
    
    const [result] = await this.connectionAPI.execute<ResultSetHeader>(
      query, 
      [body.name, body.amount],
    );
      
    return { id: result.insertId, name: body.name, amount: body.amount };
  }

  async ListAllProducts(): Promise<IAllProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connectionAPI.execute(query);

    return products as IAllProduct[];
  }
}