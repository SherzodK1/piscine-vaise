-- AddForeignKey
ALTER TABLE `s_inscrire` ADD CONSTRAINT `S_inscrire_ibfk_1` FOREIGN KEY (`Id_Cours`) REFERENCES `cours`(`Id_Cours`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `s_inscrire` ADD CONSTRAINT `S_inscrire_ibfk_2` FOREIGN KEY (`Id_Utilisateur`) REFERENCES `client`(`Id_Utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
