const axios = require("axios");
require("dotenv").config();

export default async function handler(req, res) {
  const axiosGetScoreConfig = {
    headers: {
      "X-API-KEY": process.env.SCORER_API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const { data, status } = await axios.get(
    `https://api.scorer.gitcoin.co/registry/score/${"119"}/${
      req.query.address
    }`,
    axiosGetScoreConfig
  );

  res.status(200).json(data);
}
