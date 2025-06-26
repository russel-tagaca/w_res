import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // PDF download route
  app.get("/api/download-resume", (req, res) => {
    const pdfPath = path.resolve(import.meta.dirname, "..", "attached_assets", "ResumeE1.pdf");
    
    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ error: "Resume PDF not found" });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Russel_Tagaca_Resume.pdf"');
    
    const fileStream = fs.createReadStream(pdfPath);
    fileStream.pipe(res);
  });

  const httpServer = createServer(app);

  return httpServer;
}
