/*
  Warnings:

  - You are about to alter the column `image` on the `cours` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - The primary key for the `equipement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `duree` on the `equipement` table. All the data in the column will be lost.
  - You are about to drop the column `id_Equipement` on the `equipement` table. All the data in the column will be lost.
  - You are about to alter the column `image` on the `equipement` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `image` on the `evenement` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `image` on the `utilisateur` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - Added the required column `Id_Equipement` to the `equipement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cours` MODIFY `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `equipement` DROP PRIMARY KEY,
    DROP COLUMN `duree`,
    DROP COLUMN `id_Equipement`,
    ADD COLUMN `Id_Equipement` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `image` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`Id_Equipement`);

-- AlterTable
ALTER TABLE `evenement` MODIFY `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `utilisateur` MODIFY `image` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `empreinter` ADD CONSTRAINT `Empreinter_ibfk_1` FOREIGN KEY (`Id_Equipement`) REFERENCES `equipement`(`Id_Equipement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `empreinter` ADD CONSTRAINT `Empreinter_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
