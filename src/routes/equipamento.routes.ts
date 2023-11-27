import { Router } from 'express';
import { EquipamentoController } from '../controllers/EquipamentoController';

export const routesEquipamentos = Router();

const controller = new EquipamentoController();

routesEquipamentos.get('/equipamentos', (req, res) => {
  return res.json({ message: 'Chegou aqui' });
});

routesEquipamentos.post('/equipamento', async (req, res) => {
  return await controller.create(req, res);
});
