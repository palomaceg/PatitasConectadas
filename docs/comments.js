module.exports = {
  paths: {
    "/comment": {
      get: {
        summary: "Obtener todos los comentarios",
        tags: ["Comentarios"],
        responses: {
          200: {
            description: "Lista de comentarios",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    items: {
                      $ref: "#/components/schemas/Comment",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error del servidor",
          },
        },
      },
    },
  },
};
