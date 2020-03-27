"use strict";

import express from "express";
import cors from "./middlewares/cors";

const server = express();

server.use(cors);

server.get("/", (request, response) => response.json({ success: true, message: "Hello world!" }));

server.listen(8081, () => console.log("Server started on http://localhost:8081"));
