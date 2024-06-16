import express, { Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser"; // Importar cookie-parser
import sequelize from "./config/sequelize";

import UserRouter from "./routes/UserRouter";
import BibliographRouter from "./routes/BibliographRouter";
import CurricularUnityRouter from "./routes/CurricularUnityRouter";
import CurricularUnityBibliographRouter from "./routes/CurricularUnityBibliographRouter";
import CurricularUnityKnowledgeRouter from "./routes/CurricularUnityKnowledgeRouter";
import CurricularUnitySkillRouter from "./routes/CurricularUnitySkillRouter";
import EvaluationPeriodsRouter from "./routes/EvaluationPeriodsRouter";
import HolidaysRouter from "./routes/HolidaysRouter";
import PPCRouter from "./routes/PPCRouter";
import SkillRouter from "./routes/SkillRouter";
import KnowledgeRouter from "./routes/KnowledgeRouter";
import HomeRouter from "./routes/HomeRouter";

const port = 8000;
const app = express();

// Set up view engine and views directory
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

// Middleware for JSON handling and URL encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Adicionar cookie-parser

// Register routes
app.use("/user", UserRouter);
app.use("/bibliograph", BibliographRouter);
app.use("/curricular-unity", CurricularUnityRouter);
app.use("/curricular-unity-bibliograph", CurricularUnityBibliographRouter);
app.use("/curricular-unity-knowledge", CurricularUnityKnowledgeRouter);
app.use("/curricular-unity-skill", CurricularUnitySkillRouter);
app.use("/evaluation-periods", EvaluationPeriodsRouter);
app.use("/holidays", HolidaysRouter);
app.use("/ppc", PPCRouter);
app.use("/skill", SkillRouter);
app.use("/knowledge", KnowledgeRouter);
app.use("/home", HomeRouter);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.redirect("/user/login");
});

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Now listening on port http://localhost:${port}`);
    });
  })
  .catch((err: Error) => {
    console.error("Unable to connect to the database:", err);
  });

export default app;
