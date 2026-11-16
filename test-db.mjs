import dns from "node:dns";
import { MongoClient } from "mongodb";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const client = new MongoClient(process.env.MONGODB_URI);

try {
  await client.connect();
  await client.db("bazardor").command({ ping: 1 });
  console.log("সংযোগ সফল");
} catch (e) {
  console.log("সংযোগ হয়নি:", e.message);
} finally {
  await client.close();
}