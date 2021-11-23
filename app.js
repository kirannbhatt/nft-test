const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mintNFT = require("./scripts/mint");

app.get("/", (req, res) => {
  res.send("Hello NFT");
});

app.post("/mint", async (req, res) => {
  try {
    const { uri } = req.body;
    const resp = await mintNFT(uri);
    res.send(200, resp);
  } catch (error) {
    console.log(error);
    res.send(400, error);
  }
});

app.post("/upload", (req, res) => {
  res.send(200, "TODO - upload to alchemy");
});

app.listen(port, () => {
  console.log(`Zegal NFT listening at http://localhost:${port}`);
});
