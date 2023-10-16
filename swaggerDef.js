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
  paths: {
    '/pet/criar': {
      post: {
        summary: 'Cria um novo pet',
        tags: ['Pets'],
        requestBody: {
          description: 'Dados do pet a ser criado',
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  nome: {
                    type: 'string',
                    example: 'Nome do animal',
                  },
                  especie: {
                    type: 'string',
                    example: 'Espécie do animal',
                  },
                  cor: {
                    type: 'string',
                    example: 'Cor do animal',
                  },
                  idade: {
                    type: 'number',
                    example: 3,
                  },
                  foto: {
                    type: 'string',
                    example: 'URL da foto do animal',
                  },
                  peso: {
                    type: 'number',
                    example: 5.5,
                  },
                },
                required: ['nome', 'especie'],
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Pet criado com sucesso',
          },
          '400': {
            description: 'Requisição inválida. Verifique os dados de entrada.',
          },
        },
      },
    },
    '/pet/': {
      get: {
        summary: 'Retorna todos os pets',
        tags: ['Pets'],
        responses: {
          '201': {
            description: 'Pet criado com sucesso',
          },
          '400': {
            description: 'Requisição inválida',
          },
        },
      }
    }
  },
};

module.exports = swaggerDefinition;
