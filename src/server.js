import hapi from "@hapi/hapi";
import routes from "./routes.js";

const init = async () => {
  const server = hapi.server({
    host: "localhost",
    port: 5000,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.info("Server allready listen for port 5000...");
};

init();
