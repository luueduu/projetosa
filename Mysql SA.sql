-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: nodemysql
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cadastro`
--

DROP TABLE IF EXISTS `cadastro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `sobreNome` varchar(45) NOT NULL,
  `idade` tinyint(4) NOT NULL,
  `fone` int(11) NOT NULL,
  `end` varchar(45) NOT NULL,
  `num` int(11) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `estados` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro`
--

LOCK TABLES `cadastro` WRITE;
/*!40000 ALTER TABLE `cadastro` DISABLE KEYS */;
INSERT INTO `cadastro` VALUES (9,'Madalena','Roepke',45,988662277,'Rua Tifa Silvada',14,'Schroeder','Santa Catarina'),(10,'Ronaldo','Roepke',42,45621,'Rua leopoldo fiedler n429',26,'Schroeder','Santa Catarina - SC'),(11,'Yasmin','Roepke',9,45621,'Rua leopoldo fiedler n429',26,'Schroeder','Santa Catarina - SC'),(12,'Yasmin','Roepke',9,45621,'Rua leopoldo fiedler n429',1414,'Schroeder','Santa Catarina - SC'),(13,'Yasmin','Roepke',9,45621,'Rua leopoldo fiedler n429',1414,'Schroeder','Santa Catarina - SC'),(14,'Yasmin','Roepke',9,45621,'Rua leopoldo fiedler n429',1414,'Schroeder','Santa Catarina - SC'),(15,'Ronaldo','Roepke',18,988662277,'Rua leopoldo fiedler n429',53,'Schroeder','Santa Catarina - SC'),(16,'Ronaldo','Roepke',41,988662277,'Rua leopoldo fiedler n429',1,'Schroeder','Santa Catarina - SC');
/*!40000 ALTER TABLE `cadastro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'nodemysql'
--

--
-- Dumping routines for database 'nodemysql'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-11 23:19:45
