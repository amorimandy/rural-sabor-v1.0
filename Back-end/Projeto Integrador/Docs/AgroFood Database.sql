create database db_agrofood;
use db_agrofood;
CREATE TABLE `tb_Produto` (
	`ID` bigint NOT NULL AUTO_INCREMENT,
	`Nome` varchar(20) NOT NULL,
	`Descrição` varchar(300) NOT NULL,
	`Preço` DECIMAL(10,2) NOT NULL,
	`Disponibilidade` BOOLEAN NOT NULL,
	`Categoria_ID` bigint NOT NULL,
	PRIMARY KEY (`ID`)
);
CREATE TABLE `tb_Categoria` (
	`ID` bigint NOT NULL AUTO_INCREMENT,
	`Região` varchar(20) NOT NULL,
	`Categoria` varchar(20) NOT NULL,
	`Tipo_Produtor` varchar(100) NOT NULL,
	PRIMARY KEY (`ID`)
);
CREATE TABLE `tb_Usuário` (
	`ID` bigint NOT NULL AUTO_INCREMENT,
	`Nome_Completo` varchar(100) NOT NULL,
	`E-mail` varchar(70) NOT NULL,
	`Senha` varchar(50) NOT NULL,
	PRIMARY KEY (`ID`)
);
ALTER TABLE `tb_Produto` ADD CONSTRAINT `tb_Produto` FOREIGN KEY (`Categoria_ID`) REFERENCES `tb_Categoria`(`ID`);
ALTER TABLE `tb_Usuário` ADD constraint UNIQUE(`E-mail`);