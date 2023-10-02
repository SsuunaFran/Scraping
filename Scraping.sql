-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 02, 2023 at 11:00 AM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Scraping`
--

-- --------------------------------------------------------

--
-- Table structure for table `scrapper`
--

CREATE TABLE `scrapper` (
  `JobTitle` varchar(200) DEFAULT NULL,
  `Company` varchar(200) DEFAULT NULL,
  `DatePosted` varchar(50) DEFAULT NULL,
  `Location` varchar(50) DEFAULT NULL,
  `ClosingDate` varchar(50) DEFAULT NULL,
  `DateAgo` varchar(50) DEFAULT NULL,
  `JobType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `scrapper`
--

INSERT INTO `scrapper` (`JobTitle`, `Company`, `DatePosted`, `Location`, `ClosingDate`, `DateAgo`, `JobType`) VALUES
('Financial advisor: accountability, civic engagement and rights at Danish Embassy in Uganda', 'Danish Embassy in Uganda', 'September 26, 2023', 'Kampala', 'October 7, 2023', '18 hours ago', 'Full Time'),
('MEL (Monitoring, Evaluation and Learning) Adviser at Danish Embassy in Uganda', 'Danish Embassy in Uganda', 'September 26, 2023', 'Kampala', 'October 7, 2023', '18 hours ago', 'Full Time'),
('Compensation and Benefits Officer Job at FINCA Uganda', 'FINCA Uganda', 'September 26, 2023', 'Kampala', 'October 7, 2023', '18 hours ago', 'Full Time'),
('Learning Support Teacher at Rainbow International School', 'Rainbow International School ', 'September 26, 2023', 'Kampala', 'September 30, 2023', '19 hours ago', 'Full Time'),
('M&E Officer, RISING Project at Plan International', 'Plan International', 'September 26, 2023', 'Nebbi', 'October 7, 2023', '19 hours ago', 'Full Time'),
('Monitoring and Evaluation Advisor at Uganda Protestant Medical Bureau (UPMB)', 'Uganda Protestant Medical Bureau (UPMB)', 'September 26, 2023', 'Arua', 'September 30, 2023', '19 hours ago', 'Full Time'),
('HIV Prevention Assistant at Uganda Protestant Medical Bureau (UPMB)', 'Uganda Protestant Medical Bureau (UPMB)', 'September 26, 2023', 'Arua', 'September 30, 2023', '19 hours ago', 'Full Time'),
('2 Employment Opportunities at Uganda Retirement Benefits Regulatory Authority (URBRA)', 'Uganda Retirement Benefits Regulatory Authority (URBRA)', 'September 26, 2023', 'Kampala', 'October 7, 2023', '19 hours ago', 'Full Time'),
('Migration Health Nurse (2 Positions) at IOM Uganda', 'International Organization for Migration (IOM)', 'September 26, 2023', 'Kampala', 'October 7, 2023', '19 hours ago', 'Full Time'),
('Information Technology Officer Job at Oxfam Novib', 'Oxfam Novib', 'September 26, 2023', 'Kampala', 'October 9, 2023', '19 hours ago', 'Full Time'),
('Finance Graduate Trainee at Oxfam Novib', 'Oxfam Novib', 'September 26, 2023', 'Kampala', 'October 3, 2023', '19 hours ago', 'Internship'),
('Senior Administrative Officer Job at Catholic Relief Services (CRS)', 'Catholic Relief Services (CRS)', 'September 25, 2023', 'Kampala', 'October 6, 2023', '2 days ago', 'Full Time'),
('Communications and Reporting Officer Job at Catholic Relief Services (CRS)', 'Catholic Relief Services (CRS)', 'September 25, 2023', 'Kampala', 'October 6, 2023', '2 days ago', 'Full Time'),
('Regional Area Manager Job at Save the Children Uganda', 'Save the Children International', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('Technical Director – Program Implementation – USAID/ BHA Uthabiti at Save the Children Uganda', 'Save the Children International', 'September 25, 2023', 'Kampala', 'October 7, 2023', '2 days ago', 'Full Time'),
('Project Implementation Officer Job at International Fund for Animal Welfare (IFAW)', 'International Fund for Animal Welfare (IFAW)', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('Infrastructure Assistant, Renewable Energy at Enabel Uganda', 'Enabel', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('IT Manager Job at Private Sector Foundation Uganda', 'Private Sector Foundation Uganda (PSFU)', 'September 25, 2023', 'Kampala', 'October 11, 2023', '2 days ago', 'Full Time'),
('Electrical Technician Job at Roofings Ltd', 'Roofings Group', 'September 25, 2023', 'Lubowa', 'September 30, 2023', '2 days ago', 'Full Time'),
('Administrative and Accounts Officer Job at Kimanya-Ngeyo Foundation', 'Kimanya-Ngeyo Foundation', 'September 25, 2023', 'Jinja', 'October 2, 2023', '2 days ago', 'Full Time'),
('2 Employment Opportunities at West Nile Regional Civil Society Network (WECISNET)', 'West Nile Regional Civil Society Network (WECISNET)', 'September 25, 2023', 'Arua', 'October 7, 2023', '2 days ago', 'Full Time'),
('Mechanical Technician at Movit Products Limited (MPL)', 'Movit Products Limited', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('Operational Projects & Design Engineer Job at Movit Products Limited (MPL)', 'Movit Products Limited', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('Technical Process Operator (2 Positions) at Movit Products Limited (MPL)', 'Movit Products Limited', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('Utilities Artisan (2 Positions) at Movit Products Limited (MPL)', 'Movit Products Limited', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('Boiler Operator Job at Movit Products Limited (MPL)', 'Movit Products Limited', 'September 25, 2023', 'Kampala', 'September 30, 2023', '2 days ago', 'Full Time'),
('2 Employment Opportunities at Dairy Development Authority (DDA)', 'Dairy Development Authority', 'September 25, 2023', 'Kampala', 'October 13, 2023', '2 days ago', 'Full Time'),
('7 Employment Opportunities at WaterAid Uganda', 'WaterAid', 'September 25, 2023', 'Kampala', 'October 6, 2023', '2 days ago', 'Full Time'),
('45 Employment Opportunities at Reach Out Mbuya Community Health Initiative', 'Reach Out Mbuya Community Health Initiative', 'September 22, 2023', 'Uganda', 'September 30, 2023', '5 days ago', 'Full Time'),
('2 Employment Opportunities at ACODEV Uganda', 'ACODEV', 'September 22, 2023', 'Kampala', 'October 5, 2023', '5 days ago', 'Full Time');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
