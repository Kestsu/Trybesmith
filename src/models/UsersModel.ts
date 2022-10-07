import { ResultSetHeader, Pool } from 'mysql2/promise';
import { IUser, IUserList } from '../interfaces/index';

export default class UsersModel {
  public connectionAPI : Pool;

  constructor(connection: Pool) {
    this.connectionAPI = connection;
  }

  async PostNewUser(body: Omit<IUser, 'id'>): Promise<void> {
    const { username, classe, level, password } = body;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
     VALUES(?, ?, ?, ?)`;
    
    await this.connectionAPI.execute<ResultSetHeader>(
      query, 
      [username, classe, level, password],
    );
  }

  async ListAllUsers(): Promise<IUserList[]> {
    const query = 'SELECT * FROM Trybesmith.Users';
    const [result] = await this.connectionAPI.execute(query);

    return result as IUserList[];
  }
}