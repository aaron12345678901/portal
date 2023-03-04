-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2023 at 10:20 PM
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
(1, 'bob', 'mcdade ', 'bob@bob', 'c4ca4238a0b923820dcc509a6f75849b', '9834452', '  23/12/2023', 0),
(2, 'aaron', 'mcavoy', 'aaron@aaron', 'd41d8cd98f00b204e9800998ecf8427e', '985676gvgg', '              25/09/2022', 0),
(4, 'tim', 'timmy', 'tim@tim', 'd41d8cd98f00b204e9800998ecf8427e', '123445', '    12/3/2023', 0),
(18, 'admin', 'admin', 'admin@admin', '21232f297a57a5a743894a0e4a801fc3', '1', '1', 1),
(19, 'h', 'h', 'h@h', 'c4ca4238a0b923820dcc509a6f75849b', NULL, NULL, 0),
(20, '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `vid`
--

CREATE TABLE `vid` (
  `id` int(11) NOT NULL,
  `vidname` varchar(50) NOT NULL,
  `vidcode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vid`
--

INSERT INTO `vid` (`id`, `vidname`, `vidcode`) VALUES
(1, 'mri', 'nFkBhUYynUw'),
(2, 'bonefracture', 'kTa_Pj8-DfA'),
(3, 'footwarts', 'D0tbq5IP0gA');

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
  `fk_doctor_id` int(11) NOT NULL,
  `fk_vid_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visit`
--

INSERT INTO `visit` (`id`, `ailment`, `treatment`, `ward`, `date`, `fk_register_id`, `fk_doctor_id`, `fk_vid_id`) VALUES
(1, '   pain in head ', 'mri scan ', '    12af', '2023-02-15', 1, 2, 1),
(2, '              pain in spine', 'mri scan', '              13b', '2023-02-01', 2, 1, 1),
(3, '    foot warts ', 'cleaned area and stitch up ', '    22h', '2023-02-25', 4, 1, 3);

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
-- Indexes for table `vid`
--
ALTER TABLE `vid`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visit`
--
ALTER TABLE `visit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `visitforgenkeytoregister` (`fk_register_id`),
  ADD KEY `visitforgenkeytodoctor` (`fk_doctor_id`),
  ADD KEY `visitforegnkeyvid` (`fk_vid_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vid`
--
ALTER TABLE `vid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `visitforegnkeyvid` FOREIGN KEY (`fk_vid_id`) REFERENCES `vid` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `visitforgenkeytodoctor` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `visitforgenkeytoregister` FOREIGN KEY (`fk_register_id`) REFERENCES `register` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
