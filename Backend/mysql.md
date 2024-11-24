CREATE SCHEMA `veterinaria_bd` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE dueños (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NULL,
    email VARCHAR(100) NULL
);

CREATE TABLE mascotas (    
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipoMascota ENUM('Perro', 'Gato', 'Conejo', 'Ave', 'Otro') NOT NULL,
    estado ENUM('active', 'inactive') NOT NULL,
    nacimiento DATE NOT NULL,
    dueñoId INT NOT NULL,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    FOREIGN KEY (dueñoId) REFERENCES dueños(id)
);
