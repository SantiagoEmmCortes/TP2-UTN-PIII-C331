**Creacion de la Base de Datos para primer uso de la API:

CREATE SCHEMA `veterinaria_bd` DEFAULT CHARACTER SET utf8 ;

USE `veterinaria_bd`;

CREATE TABLE dueños (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NULL,
    email VARCHAR(100) NULL,
    createdAt DATE NULL,
    updatedAt DATE NULL
);

CREATE TABLE mascotas (    
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipoMascota ENUM('Perro', 'Gato', 'Conejo', 'Ave', 'Otro') NOT NULL,
    estado ENUM('Active', 'Inactive') NOT NULL,
    nacimiento DATE NOT NULL,
    dueñoId INT NOT NULL,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    FOREIGN KEY (dueñoId) REFERENCES dueños(id)
);

**Documentacion para el uso de la API disponible en http://localhost:3030/api-docs