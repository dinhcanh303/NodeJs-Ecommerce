const app = require("./src/v1/app");
const {
  app: { port },
} = require("./src/v1/configs/config.mongodb");
const PORT = port || 3055;
const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Exit WSV`);
  });
});
