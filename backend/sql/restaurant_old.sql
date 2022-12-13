-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql_container:3306
-- Tiempo de generación: 01-12-2022 a las 17:53:03
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurant`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Menu`
--

CREATE TABLE `Menu` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Menu`
--

INSERT INTO `Menu` (`id`, `nombre`) VALUES
(1, 'traditional'),
(2, 'children'),
(3, 'fatallity'),
(4, 'premium'),
(5, 'special');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Table_`
--

CREATE TABLE `Table_` (
  `id` int(11) NOT NULL,
  `reserved` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Table_`
--

INSERT INTO `Table_` (`id`, `reserved`) VALUES
(1, 0),
(2, 0),
(3, 0),
(4, 0),
(5, 0),
(6, 0),
(7, 0),
(8, 0),
(9, 0),
(10, 0),
(11, 0),
(12, 0),
(13, 0),
(14, 0),
(15, 0),
(16, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `avatar` varchar(150) NOT NULL,
  `type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `User`
--

INSERT INTO `User` (`id`, `username`, `password`, `email`, `avatar`, `type`) VALUES
(1, 'bioska', '1234', 'bioska@gmail.com', 'https://avatars.dicebear.com/api/adventurer-neutral/biosking.svg', 1),
(2, 'reif400', '12345', 'reif400@gmail.com', 'https://avatars.dicebear.com/api/adventurer-neutral/rft400.svg', 1),
(9, 'cliente1', '12345', 'cliente@gmail.com', 'https://avatars.dicebear.com/api/adventurer-neutral/cliente.svg', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `User_table_reserved`
--

CREATE TABLE `User_table_reserved` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `table_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Disparadores `User_table_reserved`
--
DELIMITER $$
CREATE TRIGGER `Delete_Reserved_User` AFTER DELETE ON `User_table_reserved` FOR EACH ROW begin
	UPDATE Table_ t SET reserved=0 WHERE t.id=OLD.table_id;
end
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `Reserved_Table_to_User` AFTER INSERT ON `User_table_reserved` FOR EACH ROW BEGIN
	UPDATE Table_ t SET reserved=1 WHERE t.id = NEW.table_id;
END
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Menu`
--
ALTER TABLE `Menu`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Table_`
--
ALTER TABLE `Table_`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`,`email`);

--
-- Indices de la tabla `User_table_reserved`
--
ALTER TABLE `User_table_reserved`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `table_id` (`table_id`),
  ADD KEY `menu_id` (`menu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Menu`
--
ALTER TABLE `Menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `Table_`
--
ALTER TABLE `Table_`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `User_table_reserved`
--
ALTER TABLE `User_table_reserved`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `User_table_reserved`
--
ALTER TABLE `User_table_reserved`
  ADD CONSTRAINT `menu_id` FOREIGN KEY (`menu_id`) REFERENCES `Menu` (`id`),
  ADD CONSTRAINT `table_id` FOREIGN KEY (`table_id`) REFERENCES `Table_` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
