import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1724852728212 implements MigrationInterface {
  name = 'Init1724852728212';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "type" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "battle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "winnerId" integer NOT NULL, "winnerName" varchar NOT NULL, "loserId" integer NOT NULL, "loserName" varchar NOT NULL, "createAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pokemon"("id", "name") SELECT "id", "name" FROM "pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "pokemon"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pokemon" RENAME TO "pokemon"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "imageUrl" varchar(70) NOT NULL, "typeId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pokemon"("id", "name") SELECT "id", "name" FROM "pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "pokemon"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pokemon" RENAME TO "pokemon"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(70) NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "imageUrl" varchar(70) NOT NULL, "typeId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pokemon"("id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId") SELECT "id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId" FROM "pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "pokemon"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pokemon" RENAME TO "pokemon"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(70) NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "imageUrl" varchar(70) NOT NULL, "typeId" integer, CONSTRAINT "FK_70b5d8137a04238562036637d42" FOREIGN KEY ("typeId") REFERENCES "type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pokemon"("id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId") SELECT "id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId" FROM "pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "pokemon"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pokemon" RENAME TO "pokemon"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pokemon" RENAME TO "temporary_pokemon"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(70) NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "imageUrl" varchar(70) NOT NULL, "typeId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId") SELECT "id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId" FROM "temporary_pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pokemon"`);
    await queryRunner.query(
      `ALTER TABLE "pokemon" RENAME TO "temporary_pokemon"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "imageUrl" varchar(70) NOT NULL, "typeId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId") SELECT "id", "name", "attack", "defense", "hp", "speed", "imageUrl", "typeId" FROM "temporary_pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pokemon"`);
    await queryRunner.query(
      `ALTER TABLE "pokemon" RENAME TO "temporary_pokemon"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("id", "name") SELECT "id", "name" FROM "temporary_pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pokemon"`);
    await queryRunner.query(
      `ALTER TABLE "pokemon" RENAME TO "temporary_pokemon"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "timestamp" bigint NOT NULL, "name" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("id", "name") SELECT "id", "name" FROM "temporary_pokemon"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pokemon"`);
    await queryRunner.query(`DROP TABLE "battle"`);
    await queryRunner.query(`DROP TABLE "type"`);
  }
}
