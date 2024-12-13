-- AddForeignKey
ALTER TABLE `s_enregistrer` ADD CONSTRAINT `s_enregistrer_ibfk_1` FOREIGN KEY (`Id_Evenement`) REFERENCES `evenement`(`Id_Evenement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `s_enregistrer` ADD CONSTRAINT `s_enregistrer_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
