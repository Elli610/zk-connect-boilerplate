import express from "express";
import cors from "cors";
import { DataRequest, ZkConnect } from "@sismo-core/zk-connect-server";

const app = express();
app.use(cors());
app.use(express.json());

// Instantiate zkConnect with your AppId here

app.post("/auth", async (req, res) => {
  const { zkConnectResponse } = req.body;

  // Verify the zkConnectResponse here and send back the vaultId
  res.json({ vaultId: "123" });
});

app.listen(process.env.PORT ?? 8080);
