module.exports = {
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          _id: { type: "string" },
          name: { type: "string" },
        },
      },
      Comment: {
        type: "object",
        properties: {
          _id: { type: "string" },
          text: { type: "string" },
          postId: { type: "string" },
          likes: {
            type: "array",
            items: { type: "string" },
          },
          user: { $ref: "#/components/schemas/User" },
          image: {
            type: "array",
            items: { type: "string" },
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },
    },
  },
};
