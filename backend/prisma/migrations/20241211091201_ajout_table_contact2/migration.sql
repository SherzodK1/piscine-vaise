/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Empreinter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Equipement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Espace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Evenement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Forfait` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paiement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `S_enregistrer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `S_inscrire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Salle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Utilisateur` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Admin` DROP FOREIGN KEY `Admin_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Client` DROP FOREIGN KEY `Client_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Client` DROP FOREIGN KEY `Client_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Cours` DROP FOREIGN KEY `Cours_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Cours` DROP FOREIGN KEY `Cours_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Empreinter` DROP FOREIGN KEY `Empreinter_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Empreinter` DROP FOREIGN KEY `Empreinter_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Equipement` DROP FOREIGN KEY `Equipement_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Espace` DROP FOREIGN KEY `Espace_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Espace` DROP FOREIGN KEY `Espace_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Evenement` DROP FOREIGN KEY `Evenement_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Evenement` DROP FOREIGN KEY `Evenement_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Paiement` DROP FOREIGN KEY `Paiement_ibfk_1`;

-- DropForeignKey
ALTER TABLE `S_enregistrer` DROP FOREIGN KEY `S_enregistrer_ibfk_1`;

-- DropForeignKey
ALTER TABLE `S_enregistrer` DROP FOREIGN KEY `S_enregistrer_ibfk_2`;

-- DropForeignKey
ALTER TABLE `S_inscrire` DROP FOREIGN KEY `S_inscrire_ibfk_1`;

-- DropForeignKey
ALTER TABLE `S_inscrire` DROP FOREIGN KEY `S_inscrire_ibfk_2`;

-- AlterTable
ALTER TABLE `forfait` MODIFY `description` TEXT NULL;

-- DropTable
DROP TABLE `Admin`;

-- DropTable
DROP TABLE `Client`;

-- DropTable
DROP TABLE `Contact`;

-- DropTable
DROP TABLE `Cours`;

-- DropTable
DROP TABLE `Empreinter`;

-- DropTable
DROP TABLE `Equipement`;

-- DropTable
DROP TABLE `Espace`;

-- DropTable
DROP TABLE `Evenement`;

-- DropTable
DROP TABLE `Forfait`;

-- DropTable
DROP TABLE `Paiement`;

-- DropTable
DROP TABLE `S_enregistrer`;

-- DropTable
DROP TABLE `S_inscrire`;

-- DropTable
DROP TABLE `Salle`;

-- DropTable
DROP TABLE `Utilisateur`;

-- CreateTable
CREATE TABLE `Conctact` (
    `Id_Contact` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `mail` VARCHAR(50) NULL,
    `message` TEXT NULL,
    `createDate` DATETIME(0) NULL,

    PRIMARY KEY (`Id_Contact`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
