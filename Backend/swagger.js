const swaggerJsDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Veterinaria API",
        version: "1.0.0",
        description: "API para la gestión de dueños y mascotas en una veterinaria",
    },
    servers: [
        {
            url: "http://localhost:3030",
            description: "Servidor local",
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
