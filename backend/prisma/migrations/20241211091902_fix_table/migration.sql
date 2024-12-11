/*
  Warnings:

  - You are about to drop the `Conctact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Conctact`;

-- CreateTable
CREATE TABLE `contact` (
    `Id_Contact` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NULL,
    `mail` VARCHAR(50) NULL,
    `message` TEXT NULL,
    `createDate` DATETIME(0) NULL,

    PRIMARY KEY (`Id_Contact`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
