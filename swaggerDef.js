const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Minha API Express com Swagger",
    version: "1.0.0",
    description: "Documentação da API Express com Swagger",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local",
    },
  ],
  paths: {
    "/pet/criar": {
      post: {
        summary: "Cria um novo pet",
        tags: ["Pets"],
        requestBody: {
          description: "Dados do pet a ser criado",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nome: {
                    type: "string",
                    example: "Nome do animal",
                  },
                  especie: {
                    type: "string",
                    example: "Espécie do animal",
                  },
                  cor: {
                    type: "string",
                    example: "Cor do animal",
                  },
                  idade: {
                    type: "number",
                    example: 3,
                  },
                  foto: {
                    type: "string",
                    example: "URL da foto do animal",
                  },
                  peso: {
                    type: "number",
                    example: 5.5,
                  },
                },
                required: ["nome", "especie"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "Pet criado com sucesso",
          },
          400: {
            description: "Requisição inválida. Verifique os dados de entrada.",
          },
        },
      },
    },
    "/pet/": {
      get: {
        summary: "Retorna todos os pets",
        tags: ["Pets"],
        responses: {
          201: {
            description: "Pet criado com sucesso",
          },
          400: {
            description: "Requisição inválida",
          },
        },
      },
    },
    "/pet/{petId}": {
      put: {
        summary: "Atualiza um pet com base no ID do MongoDB",
        tags: ["Pets"],
        parameters: [
          {
            name: "petId",
            in: "path",
            required: true,
            description: "ID do pet no MongoDB",
            schema: {
              type: "string",
            }}],
        requestBody: {
          description: "Dados do pet a serem atualizados",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nome: {
                    type: "string",
                    example: "Novo nome do animal",
                  },
                  especie: {
                    type: "string",
                    example: "Nova espécie do animal",
                  },
                  cor: {
                    type: "string",
                    example: "Nova cor do animal",
                  },
                  idade: {
                    type: "number",
                    example: 4,
                  },
                  foto: {
                    type: "string",
                    example: "Nova URL da foto do animal",
                  },
                  peso: {
                    type: "number",
                    example: 6.0,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Pet atualizado com sucesso",
          },
          400: {
            description: "Requisição inválida. Verifique os dados de entrada.",
          },
          404: {
            description: "Pet não encontrado com o ID fornecido.",
          },
        },
      },
    },
  },
};

module.exports = swaggerDefinition;
