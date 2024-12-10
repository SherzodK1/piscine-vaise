/*
  Warnings:

  - You are about to alter the column `capacite` on the `salle` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Int`.

*/
-- AlterTable
ALTER TABLE `salle` MODIFY `capacite` INTEGER NULL;
