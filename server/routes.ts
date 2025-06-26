import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test route for debugging
  app.get("/api/test", (req, res) => {
    res.json({ message: "API is working!", timestamp: new Date().toISOString() });
  });

  // PDF download route
  app.get("/api/download-resume", (req, res) => {
    const pdfPath = path.resolve(process.cwd(), "attached_assets", "ResumeE1.pdf");
    res.download(pdfPath, "Russel_Tagaca_Resume.pdf");
  });

  const httpServer = createServer(app);

  return httpServer;
}
