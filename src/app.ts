import express from 'express';
import cors from 'cors';
import { routesEquipamentos } from './routes/equipamento.routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routesEquipamentos);
