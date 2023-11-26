import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1701006197800 implements MigrationInterface {
    name = 'Default1701006197800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "equipamentos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" text NOT NULL, "modelo" text NOT NULL, "num_serie" text NOT NULL, "num_patrimonio" text, "num_os" text, "mac" text, "cod_barras" text, "tipo_equipamento" text, "observacoes" text, "data_transferencia" TIME WITH TIME ZONE, "estado" "public"."equipamentos_estado_enum" NOT NULL, "createdAt" TIME WITH TIME ZONE NOT NULL, "updatedAt" TIME WITH TIME ZONE NOT NULL, CONSTRAINT "PK_0db94e9eed96824cb4446343a86" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "documentos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipo" "public"."documentos_tipo_enum" NOT NULL, "file" text NOT NULL, "createdAt" TIME WITH TIME ZONE NOT NULL, "updatedAt" TIME WITH TIME ZONE NOT NULL, "doc_id" uuid, CONSTRAINT "PK_30b7ee230a352e7582842d1dc02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "documentos" ADD CONSTRAINT "FK_ea2c0e046b203f33acfb34fbc13" FOREIGN KEY ("doc_id") REFERENCES "equipamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documentos" DROP CONSTRAINT "FK_ea2c0e046b203f33acfb34fbc13"`);
        await queryRunner.query(`DROP TABLE "documentos"`);
        await queryRunner.query(`DROP TABLE "equipamentos"`);
    }

}
