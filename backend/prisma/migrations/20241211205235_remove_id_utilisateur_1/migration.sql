/*
  Warnings:

  - You are about to drop the column `Id_Utilisateur_1` on the `espace` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Id_Utilisateur_1` ON `espace`;

-- AlterTable
ALTER TABLE `espace` DROP COLUMN `Id_Utilisateur_1`;
