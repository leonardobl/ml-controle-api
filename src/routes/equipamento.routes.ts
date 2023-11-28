import { Response, Router } from 'express';
import { EquipamentoController } from '../controllers/EquipamentoController';
import { IEquipamentoDto } from '../types/equipamento';

export const routesEquipamentos = Router();

const eqController = new EquipamentoController();

routesEquipamentos.get(
  '/equipamento',
  async (req, res): Promise<Response<IEquipamentoDto[]>> => {
    return await eqController.list(req, res);
  },
);

routesEquipamentos.post(
  '/equipamento',
  async (req, res): Promise<Response<IEquipamentoDto>> => {
    return await eqController.create(req, res);
  },
);

routesEquipamentos.get('/equipamento/:id', async (req, res) => {
  return await eqController.findById(req, res);
});
