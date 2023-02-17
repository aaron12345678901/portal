-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2023 at 10:56 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactlogin`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `doctor` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `doctor`, `type`) VALUES
(1, 'dr BROWN', 'testtesstest'),
(2, 'dr YELLOW', 'tetstesttest');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `patientnum` varchar(50) DEFAULT NULL,
  `Appointments` varchar(150) DEFAULT NULL,
  `isadmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `first_name`, `last_name`, `email`, `password`, `patientnum`, `Appointments`, `isadmin`) VALUES
(1, 'bob222', 'bobobobdcdc', 'a@a', '1234', '98763e33e223', '  testtesttest2332323', 0),
(2, 'aaron', 'mcavoy', 'b@b', '1', '985676', 'Check up :25/09/2022 14.00pm ', 0),
(3, 'admin', 'admin', 'admin@admin', 'admin', 'admin', 'admin', 1),
(4, 'tim', 'timmy', 't@t', '1', '123445', '12/34/56/', 0),
(5, 'wer', 'wdd', 'e@e', '1', '12345', '23/45/67/', 0);

-- --------------------------------------------------------

--
-- Table structure for table `visit`
--

CREATE TABLE `visit` (
  `id` int(11) NOT NULL,
  `ailment` varchar(500) NOT NULL,
  `treatment` varchar(500) NOT NULL,
  `ward` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `fk_register_id` int(11) NOT NULL,
  `fk_doctor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visit`
--

INSERT INTO `visit` (`id`, `ailment`, `treatment`, `ward`, `date`, `fk_register_id`, `fk_doctor_id`) VALUES
(1, '  te', 'tes', '  12af', '2023-02-15', 1, 2),
(2, 'a rash of red, itchy spots that turn into fluid-filled blisters They then crust over to form scabs which eventually drop off.', 'soda cream', '13b', '2023-02-01', 2, 1),
(3, 'sore finger ', 'methadone ', '22h', '2023-02-25', 4, 1),
(4, 'Birney nipple ', 'soda cream ', '1a', '2023-02-20', 5, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visit`
--
ALTER TABLE `visit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `visitforgenkeytoregister` (`fk_register_id`),
  ADD KEY `visitforgenkeytodoctor` (`fk_doctor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `visit`
--
ALTER TABLE `visit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `visit`
--
ALTER TABLE `visit`
  ADD CONSTRAINT `visitforgenkeytodoctor` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `visitforgenkeytoregister` FOREIGN KEY (`fk_register_id`) REFERENCES `register` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
