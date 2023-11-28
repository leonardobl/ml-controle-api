import { Request, Response } from 'express';
import { EquipamentoRepository } from '../repositories/equipamentoRepository';
import { Equipamento } from '../entities/Equipamento';
Equipamento;
import { ToPagination } from '../utils/pagination';

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
    let { page, size } = req.body;

    if (!Number(page)) {
      page = 1;
    }
    if (!Number(size)) {
      size = 0;
    }

    const skip = Number(size) * Number(page) - Number(size);

    try {
      const result = await EquipamentoRepository.findAndCount({
        relations: ['documentos'],
        skip,
        take: Number(size),
      });

      const sizeItens = result[1];
      const pageSize = Math.ceil(sizeItens / size);

      const data = ToPagination({
        page: Number(page),
        size: Number(size),
        sizeItens,
        response: result[0],
        pageSize,
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        message: 'internal server erro',
        dataError: error,
      });
    }
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await EquipamentoRepository.findOne({
        where: { id },
        relations: ['documentos'],
      });
      return res.status(200).json(result);
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Internal server error', dataError: error });
    }
  }
}
