import { IUser } from '../interfaces';
import UsersModel from '../models/UsersModel';
import connection from '../models/connection';

require('dotenv');

const { JWT_SECRET } = process.env;

export default class UserService {
  service;

  jwt;

  constructor(jwt:any) {
    this.service = new UsersModel(connection);
    this.jwt = jwt;
  }

  public async newUser(body: IUser): Promise<void> {
    await this.service.PostNewUser(body);
    const result = this.generateToken(body);
    return result;
  }

  public generateToken(user: IUser) {
    const payload = {
      name: user.username,
      classe: user.classe,
      password: user.password,
    };

    const jwtConfig = {
      expiresIn: '8d',
      algorithm: 'HS256',
    };
    const token = this.jwt.sign(payload, JWT_SECRET, jwtConfig);
    return token;
  }
}
