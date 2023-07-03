import environment from "./config/environment.json";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { verifyToken as jwtAuthentication } from "./middleware/middleware";

import authRoutes from "./routes/auth.routes";
import batchRoutes from "./routes/batch.routes";
import biosampleRoutes from "./routes/biosample.routes";
import ngsRoutes from "./routes/ngs.routes";
import participantRoutes from "./routes/participant.routes";
import phenotypeRoutes from "./routes/phenotype.routes";
import csvRoutes from "./routes/csv.routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(jwtAuthentication);

// Routes
app.use(authRoutes);
app.use(batchRoutes);
app.use(biosampleRoutes);
app.use(ngsRoutes);
app.use(participantRoutes);
app.use(phenotypeRoutes);
app.use(csvRoutes);

// Listen
app.listen(environment.port);
console.log("Server on port", environment.port);
