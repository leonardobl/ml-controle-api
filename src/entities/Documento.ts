import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TiposDeDocumentoEnum } from '../enum/documento';
import { Equipamento } from './Equipamento';

@Entity('documentos')
export class Documento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: TiposDeDocumentoEnum })
  tipo: TiposDeDocumentoEnum;

  @Column({ type: 'text' })
  file: string;

  @ManyToOne(() => Equipamento, equi => equi.documentos)
  @JoinColumn({ name: 'doc_id' })
  equipamento: Equipamento;

  @Column({ type: 'time with time zone' })
  createdAt: Date;

  @Column({ type: 'time with time zone' })
  updatedAt: Date;
}
