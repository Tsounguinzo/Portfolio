import { getDb, isMongoConfigured } from "./mongodb";
import type { PortfolioDocument } from "@/types";

const COLLECTION = "portfolio";

export async function getPortfolioFromDb(): Promise<PortfolioDocument> {
  if (!isMongoConfigured()) {
    throw new Error("MONGODB_URI is not configured");
  }
  
  const db = await getDb();
  if (!db) {
    throw new Error("Failed to connect to MongoDB");
  }
  
  const doc = await db.collection<PortfolioDocument>(COLLECTION).findOne({});
  if (!doc) {
    throw new Error("Portfolio data not found in database. Run: npm run seed");
  }
  
  return doc;
}
