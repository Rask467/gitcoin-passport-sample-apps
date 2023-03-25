const axios = require("axios");
require("dotenv").config();

export default async function handler(req, res) {
  const axiosSubmitPassportConfig = {
    headers: {
      "X-API-KEY": process.env.SCORER_API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  console.log("body: ", req.body);

  const axiosSubmitPassportData = {
    address: req.body.address,
    community: req.body.community,
    signature: req.body.signature,
    nonce: req.body.nonce,
  };
  const resp = await axios.post(
    "https://api.scorer.gitcoin.co/registry/submit-passport",
    axiosSubmitPassportData,
    axiosSubmitPassportConfig
  );

  res.status(200).json(resp.data);
}
