import { Router } from 'express';

export const routesEquipamentos = Router();

routesEquipamentos.get('/equipamentos', (req, res) => {
  return res.json({ message: 'Chegou aqui' });
});
