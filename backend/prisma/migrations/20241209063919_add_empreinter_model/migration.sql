-- AlterTable
ALTER TABLE `cours` MODIFY `image` LONGBLOB NULL;

-- AlterTable
ALTER TABLE `equipement` MODIFY `image` LONGBLOB NULL;

-- AlterTable
ALTER TABLE `evenement` MODIFY `image` LONGBLOB NULL;

-- CreateTable
CREATE TABLE `Empreinter` (
    `Id_Utilisateur` INTEGER NOT NULL,
    `Id_Equipement` INTEGER NOT NULL,
    `dateEmpreint` DATETIME(0) NOT NULL,
    `duree` DECIMAL(15, 2) NOT NULL,

    INDEX `Id_Equipement`(`Id_Equipement`),
    PRIMARY KEY (`Id_Utilisateur`, `Id_Equipement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Empreinter` ADD CONSTRAINT `Empreinter_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Utilisateur`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Empreinter` ADD CONSTRAINT `Empreinter_ibfk_2` FOREIGN KEY (`Id_Equipement`) REFERENCES `Equipement`(`id_Equipement`) ON DELETE NO ACTION ON UPDATE NO ACTION;
