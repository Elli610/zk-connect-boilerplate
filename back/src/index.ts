import express from "express";
import cors from "cors";
import { DataRequest, ZkConnect } from "@sismo-core/zk-connect-server";

const app = express();
app.use(cors());
app.use(express.json());

// Instantiate zkConnect with your AppId here
const zkConnect = new ZkConnect({
  appId: "0x55c80a16f20a1c1083860d0e83f1a90b",
});



// Verify the response
app.post("/auth", async (req, res) => {
  const { zkConnectResponse } = req.body;
	const { vaultId } = await zkConnect.verify({zkConnectResponse});

  // Verify the zkConnectResponse here and send back the vaultId
  res.json({ vaultId: vaultId });
});


app.listen(process.env.PORT ?? 8080);
