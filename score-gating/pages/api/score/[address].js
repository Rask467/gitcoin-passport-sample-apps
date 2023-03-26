const axios = require("axios");
require("dotenv").config();

const SCORER_ID = "119";

export default async function handler(req, res) {
  const { address } = req.query;
  const data = await fetchScore(address);
  res.status(200).json(data);
}

async function fetchScore(address) {
  const axiosGetScoreConfig = {
    headers: {
      "X-API-KEY": process.env.SCORER_API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.get(
    `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${address}`,
    axiosGetScoreConfig
  );

  return data;
}
