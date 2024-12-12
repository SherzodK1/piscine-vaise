/*
  Warnings:

  - You are about to alter the column `prix` on the `espace` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Decimal(15,2)`.

*/
-- AlterTable
ALTER TABLE `espace` ADD COLUMN `typeEvenement` VARCHAR(50) NULL,
    MODIFY `prix` DECIMAL(15, 2) NULL;
