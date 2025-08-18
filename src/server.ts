import {server} from "./app";

server.listen({ port: 3000, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on http://localhost:3000");
}).catch(err => {
  console.error("Error starting server:", err);
  process.exit(1);
});