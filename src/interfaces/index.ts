export interface IProduct {
  id: number;
  name: string;
  amount: string;
}

export interface IAllProduct {
  id: number;
  name: string;
  amount: string;
  orderId: number | null
}

export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserList {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IAllOrders {
  id: number;
  userId: number;
  productsIds: number[]
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IToken {
  token: string;
}
