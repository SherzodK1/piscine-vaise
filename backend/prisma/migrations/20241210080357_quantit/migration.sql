-- CreateTable
CREATE TABLE `admin` (
    `Id_Utilisateur` INTEGER NOT NULL,

    PRIMARY KEY (`Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `Id_Utilisateur` INTEGER NOT NULL,
    `estAbonne` BOOLEAN NULL,
    `Id_Forfait` INTEGER NULL,

    INDEX `Id_Forfait`(`Id_Forfait`),
    PRIMARY KEY (`Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cours` (
    `Id_Cours` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `interventeur` VARCHAR(50) NULL,
    `description` TEXT NULL,
    `duree` DECIMAL(15, 2) NULL,
    `places` INTEGER NULL,
    `horaire` DATETIME(0) NULL,
    `dateCours` DATE NULL,
    `Id_Salle` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NULL,
    `image` LONGBLOB NULL,

    UNIQUE INDEX `Id_Salle`(`Id_Salle`),
    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Cours`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empreinter` (
    `Id_Equipement` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NOT NULL,
    `dateEmpreint` DATETIME(0) NOT NULL,
    `duree` DECIMAL(15, 2) NOT NULL,

    INDEX `Id_Equipement`(`Id_Equipement`),
    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Utilisateur`, `Id_Equipement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipement` (
    `nom` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `duree` DECIMAL(65, 30) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_Equipement` INTEGER NOT NULL AUTO_INCREMENT,
    `image` LONGBLOB NULL,
    `quantite` INTEGER NOT NULL,

    PRIMARY KEY (`id_Equipement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `espace` (
    `Id_Espace` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `places` INTEGER NULL,
    `duree` DECIMAL(15, 2) NULL,
    `prix` VARCHAR(50) NULL,
    `Id_Utilisateur` INTEGER NULL,
    `Id_Utilisateur_1` INTEGER NULL,

    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    INDEX `Id_Utilisateur_1`(`Id_Utilisateur_1`),
    PRIMARY KEY (`Id_Espace`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evenement` (
    `Id_Evenement` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `description` TEXT NULL,
    `places` INTEGER NULL,
    `duree` DECIMAL(15, 2) NULL,
    `dateHeureEvenement` DATE NULL,
    `Id_Salle` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NULL,
    `image` LONGBLOB NULL,

    UNIQUE INDEX `Id_Salle`(`Id_Salle`),
    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Evenement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `forfait` (
    `Id_Forfait` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `prix` DECIMAL(15, 2) NULL,
    `description` VARCHAR(50) NULL,

    PRIMARY KEY (`Id_Forfait`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paiement` (
    `Id_Paiement` INTEGER NOT NULL AUTO_INCREMENT,
    `dateAchat` DATETIME(0) NULL,
    `montant` DECIMAL(15, 2) NULL,
    `Id_Forfait` INTEGER NOT NULL,

    UNIQUE INDEX `Id_Forfait`(`Id_Forfait`),
    PRIMARY KEY (`Id_Paiement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `s_enregistrer` (
    `Id_Evenement` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NOT NULL,

    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Evenement`, `Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `s_inscrire` (
    `Id_Cours` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NOT NULL,

    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Cours`, `Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salle` (
    `Id_Salle` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `estLibre` BOOLEAN NULL,
    `type` VARCHAR(50) NULL,
    `capacite` VARCHAR(50) NULL,

    PRIMARY KEY (`Id_Salle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateur` (
    `Id_Utilisateur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `estAdmin` BOOLEAN NULL,
    `adresseMail` VARCHAR(50) NULL,
    `motDePasse` VARCHAR(256) NULL,
    `numeroTelephone` VARCHAR(50) NULL,
    `image` LONGBLOB NULL,

    UNIQUE INDEX `adresseMail`(`adresseMail`),
    PRIMARY KEY (`Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `admin` ADD CONSTRAINT `Admin_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `utilisateur`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `Client_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `utilisateur`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `Client_ibfk_2` FOREIGN KEY (`Id_Forfait`) REFERENCES `forfait`(`Id_Forfait`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cours` ADD CONSTRAINT `Cours_ibfk_1` FOREIGN KEY (`Id_Salle`) REFERENCES `salle`(`Id_Salle`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cours` ADD CONSTRAINT `Cours_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `admin`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `empreinter` ADD CONSTRAINT `Empreinter_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `utilisateur`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `empreinter` ADD CONSTRAINT `Empreinter_ibfk_2` FOREIGN KEY (`Id_Equipement`) REFERENCES `equipement`(`id_Equipement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `espace` ADD CONSTRAINT `Espace_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `espace` ADD CONSTRAINT `Espace_ibfk_2` FOREIGN KEY (`Id_Utilisateur_1`) REFERENCES `admin`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `evenement` ADD CONSTRAINT `Evenement_ibfk_1` FOREIGN KEY (`Id_Salle`) REFERENCES `salle`(`Id_Salle`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `evenement` ADD CONSTRAINT `Evenement_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `admin`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `paiement` ADD CONSTRAINT `Paiement_ibfk_1` FOREIGN KEY (`Id_Forfait`) REFERENCES `forfait`(`Id_Forfait`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `s_enregistrer` ADD CONSTRAINT `S_enregistrer_ibfk_1` FOREIGN KEY (`Id_Evenement`) REFERENCES `evenement`(`Id_Evenement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `s_enregistrer` ADD CONSTRAINT `S_enregistrer_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `s_inscrire` ADD CONSTRAINT `S_inscrire_ibfk_1` FOREIGN KEY (`Id_Cours`) REFERENCES `cours`(`Id_Cours`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `s_inscrire` ADD CONSTRAINT `S_inscrire_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
