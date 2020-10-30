import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();
app.use(
  cors({
    // origin: ['jazbewor.com', 'zanmer.com.br'],
  })
);

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log("Conectado com sucesso na porta 3333");
});