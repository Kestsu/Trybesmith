import { Pool } from 'mysql2/promise';
import { IAllOrders } from '../interfaces/index';

export default class OrdersModel {
  public connectionAPI : Pool;

  constructor(connection: Pool) {
    this.connectionAPI = connection;
  }

  async ListAllOrders(): Promise<IAllOrders[]> {
    const query = `SELECT OD.id, OD.userId, JSON_ARRAYAGG(TP.id) AS productsIds
    FROM Trybesmith.Orders AS OD
    INNER JOIN Trybesmith.Products AS TP ON OD.id = TP.orderId
     GROUP BY OD.id
    ORDER BY OD.userId`;
    const [products] = await this.connectionAPI.execute(query);

    return products as IAllOrders[];
  }
}