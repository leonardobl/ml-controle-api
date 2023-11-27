import { Router } from 'express';
import { EquipamentoController } from '../controllers/EquipamentoController';

export const routesEquipamentos = Router();

const controller = new EquipamentoController();

routesEquipamentos.get('/equipamentos', async (req, res) => {
  return await controller.list(req, res);
});

routesEquipamentos.post('/equipamento', async (req, res) => {
  return await controller.create(req, res);
});
