const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Minha API Express com Swagger',
      version: '1.0.0',
      description: 'Documentação da API Express com Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  };
  
module.exports = swaggerDefinition;