-- CreateTable
CREATE TABLE `Utilisateur` (
    `Id_Utilisateur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `estAdmin` BOOLEAN NULL,
    `adresseMail` VARCHAR(50) NULL,
    `motDePasse` VARCHAR(256) NULL,
    `numeroTelephone` VARCHAR(50) NULL,
    `image` VARCHAR(256) NULL,

    UNIQUE INDEX `adresseMail`(`adresseMail`),
    PRIMARY KEY (`Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `Id_Utilisateur` INTEGER NOT NULL,

    PRIMARY KEY (`Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `Id_Utilisateur` INTEGER NOT NULL,
    `estAbonne` BOOLEAN NULL,
    `Id_Forfait` INTEGER NULL,

    INDEX `Id_Forfait`(`Id_Forfait`),
    PRIMARY KEY (`Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cours` (
    `Id_Cours` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `interventeur` VARCHAR(50) NULL,
    `description` TEXT NULL,
    `duree` DECIMAL(15, 2) NULL,
    `places` INTEGER NULL,
    `horaire` DATETIME(0) NULL,
    `dateCours` DATE NULL,
    `image` VARCHAR(50) NULL,
    `Id_Salle` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NULL,

    UNIQUE INDEX `Id_Salle`(`Id_Salle`),
    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Cours`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empreinter` (
    `Id_Equipement` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NOT NULL,

    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Equipement`, `Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipement` (
    `Id_Equipement` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `type` VARCHAR(50) NULL,
    `quantité` INTEGER NULL,
    `duree` DECIMAL(15, 2) NULL,
    `image` VARCHAR(50) NULL,
    `Id_Utilisateur` INTEGER NULL,

    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Equipement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Espace` (
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
CREATE TABLE `Evenement` (
    `Id_Evenement` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `description` TEXT NULL,
    `places` INTEGER NULL,
    `duree` DECIMAL(15, 2) NULL,
    `dateHeureEvenement` DATE NULL,
    `image` VARCHAR(50) NULL,
    `Id_Salle` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NULL,

    UNIQUE INDEX `Id_Salle`(`Id_Salle`),
    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Evenement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Forfait` (
    `Id_Forfait` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `prix` DECIMAL(15, 2) NULL,
    `description` VARCHAR(50) NULL,

    PRIMARY KEY (`Id_Forfait`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiement` (
    `Id_Paiement` INTEGER NOT NULL AUTO_INCREMENT,
    `dateAchat` DATETIME(0) NULL,
    `montant` DECIMAL(15, 2) NULL,
    `Id_Forfait` INTEGER NOT NULL,

    UNIQUE INDEX `Id_Forfait`(`Id_Forfait`),
    PRIMARY KEY (`Id_Paiement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `S_enregistrer` (
    `Id_Evenement` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NOT NULL,

    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Evenement`, `Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `S_inscrire` (
    `Id_Cours` INTEGER NOT NULL,
    `Id_Utilisateur` INTEGER NOT NULL,

    INDEX `Id_Utilisateur`(`Id_Utilisateur`),
    PRIMARY KEY (`Id_Cours`, `Id_Utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Salle` (
    `Id_Salle` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `estLibre` BOOLEAN NULL,
    `type` VARCHAR(50) NULL,
    `capacite` VARCHAR(50) NULL,

    PRIMARY KEY (`Id_Salle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `Id_Contact` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `mail` VARCHAR(50) NULL,
    `message` TEXT NULL,
    `createDate` DATETIME(0) NULL,

    PRIMARY KEY (`Id_Contact`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Utilisateur`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Utilisateur`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_ibfk_2` FOREIGN KEY (`Id_Forfait`) REFERENCES `Forfait`(`Id_Forfait`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Cours` ADD CONSTRAINT `Cours_ibfk_1` FOREIGN KEY (`Id_Salle`) REFERENCES `Salle`(`Id_Salle`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Cours` ADD CONSTRAINT `Cours_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Admin`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Empreinter` ADD CONSTRAINT `Empreinter_ibfk_1` FOREIGN KEY (`Id_Equipement`) REFERENCES `Equipement`(`Id_Equipement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Empreinter` ADD CONSTRAINT `Empreinter_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Equipement` ADD CONSTRAINT `Equipement_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Admin`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Espace` ADD CONSTRAINT `Espace_ibfk_1` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Espace` ADD CONSTRAINT `Espace_ibfk_2` FOREIGN KEY (`Id_Utilisateur_1`) REFERENCES `Admin`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Evenement` ADD CONSTRAINT `Evenement_ibfk_1` FOREIGN KEY (`Id_Salle`) REFERENCES `Salle`(`Id_Salle`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Evenement` ADD CONSTRAINT `Evenement_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Admin`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_ibfk_1` FOREIGN KEY (`Id_Forfait`) REFERENCES `Forfait`(`Id_Forfait`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `S_enregistrer` ADD CONSTRAINT `S_enregistrer_ibfk_1` FOREIGN KEY (`Id_Evenement`) REFERENCES `Evenement`(`Id_Evenement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `S_enregistrer` ADD CONSTRAINT `S_enregistrer_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `S_inscrire` ADD CONSTRAINT `S_inscrire_ibfk_1` FOREIGN KEY (`Id_Cours`) REFERENCES `Cours`(`Id_Cours`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `S_inscrire` ADD CONSTRAINT `S_inscrire_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `Client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
