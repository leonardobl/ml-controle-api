import { Request, Response } from 'express';
import { EquipamentoRepository } from '../repositories/equipamentoRepository';
import { Equipamento } from '../entities/Equipamento';
Equipamento;

type EquipamentoPropsType = typeof Equipamento;

export class EquipamentoController {
  async create(req: Request, res: Response) {
    try {
      const resposta = await EquipamentoRepository.create(req.body);

      await EquipamentoRepository.save(resposta);
      return res.status(201).json(resposta);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
