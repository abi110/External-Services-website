-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2022 at 10:04 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weather`
--

-- --------------------------------------------------------

--
-- Table structure for table `weatherdata`
--

CREATE TABLE `weatherdata` (
  `Location` varchar(50) NOT NULL,
  `Time` varchar(20) NOT NULL,
  `Temperature` int(20) NOT NULL,
  `Weather` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weatherdata`
--

INSERT INTO `weatherdata` (`Location`, `Time`, `Temperature`, `Weather`) VALUES
('London', '2022-12-10 15:56:24', 0, 'Overcast Clouds'),
('Tokyo', '2022-12-10 16:53:58', 6, 'Clear Sky'),
('Boston', '2022-12-09 12:51:59', 2, 'Sunny'),
('Birmingham', '2022-12-08 11:36:28', 0, 'Overcast Clouds'),
('London', '2022-12-13 21:06:57', 0, 'Overcast Clouds'),
('Tokyo', '2022-12-13 21:07:34', 9, 'Clear Sky'),
('Boston', '2022-12-13 21:08:07', 4, 'Few Clouds'),
('Edinburgh', '2022-12-13 21:08:42', -4, 'Clear Sky'),
('Philadelphia', '2022-12-13 21:09:22', 5, 'Few Clouds'),
('Mexico City', '2022-12-13 21:10:02', 22, 'Clear Sky'),
('Sydney', '2022-12-13 21:10:25', 16, 'Clear Sky');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
