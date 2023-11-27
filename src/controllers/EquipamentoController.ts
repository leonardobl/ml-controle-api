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
      return res.status(500).json({
        message: 'internal server erro',
        dataError: error,
      });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const result = await EquipamentoRepository.find({
        relations: ['documentos'],
      });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        message: 'internal server erro',
        dataError: error,
      });
    }
  }
}
