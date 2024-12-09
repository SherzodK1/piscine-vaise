/*
  Warnings:

  - You are about to alter the column `duree` on the `equipement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to drop the `_adminequipement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `empreinter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_adminequipement` DROP FOREIGN KEY `_AdminEquipement_A_fkey`;

-- DropForeignKey
ALTER TABLE `_adminequipement` DROP FOREIGN KEY `_AdminEquipement_B_fkey`;

-- DropForeignKey
ALTER TABLE `empreinter` DROP FOREIGN KEY `Empreinter_ibfk_1`;

-- DropForeignKey
ALTER TABLE `empreinter` DROP FOREIGN KEY `Empreinter_ibfk_2`;

-- AlterTable
ALTER TABLE `equipement` MODIFY `duree` DECIMAL(65, 30) NOT NULL;

-- DropTable
DROP TABLE `_adminequipement`;

-- DropTable
DROP TABLE `empreinter`;
