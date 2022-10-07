import express from 'express';
import Products from './controllers/Products';
import Users from './controllers/Users';
import Orders from './controllers/Orders';
import Login from './controllers/Login';

import usernamePasswordValidation from './middlewares/usernamePasswordValidation';
import LoginValidation from './middlewares/LoginValidation';

const app = express();

app.use(express.json());

const productController = new Products();
const UsersController = new Users();
const ordersController = new Orders();
const loginController = new Login();
const LoginMidle = new LoginValidation();

app.get('/', (req, res) => res.status(200).json({ connect: 'connectado' }));
app.post('/products', productController.cadastrarProduto); 
app.get('/products', productController.listarProduto);

app.post('/users', UsersController.cadastrarUsuario);

app.get('/orders', ordersController.listaPedidos); // N consegui fazer a query

app.post('/login', usernamePasswordValidation, LoginMidle.validar, loginController.Logar); 

export default app;
