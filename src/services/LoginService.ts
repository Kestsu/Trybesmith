// import { Secret } from 'jsonwebtoken';
import { IToken, ILogin } from '../interfaces/index';

require('dotenv');

const { JWT_SECRET } = process.env;

export default class UserService {
  jwt;

  constructor(jwt:any) {
    this.jwt = jwt;
  }

  public LoginEnter(body:ILogin): IToken {
    const result = this.generateToken(body);
    return result;
  }

  public generateToken(body: ILogin) {
    const payload = {
      username: body.username,
      password: body.password,
    };

    const jwtConfig = {
      expiresIn: '8d',
      algorithm: 'HS256',
    };
    const token = this.jwt.sign(payload, JWT_SECRET, jwtConfig);
    return token;
  }
}
