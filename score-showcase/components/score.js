import { useState, useEffect } from "react";
import axios from "axios";
import { useSignMessage } from "wagmi";
import { verifyMessage } from "ethers/lib/utils";
import { getAccount } from "@wagmi/core";

export default function Score() {
  const account = getAccount();
  const [nonce, setNonce] = useState("");
  const [passportScore, setPassportScore] = useState(0);

  const { data, error, isLoading, signMessage } = useSignMessage({
    async onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      console.log("address: ", address);
      const resp = await axios.post("/api/score", {
        address: account.address,
        community: 119,
        signature: data,
        nonce: nonce,
      });
      console.log("post resp: ", resp);
    },
  });

  useEffect(() => {
    async function scorePassport() {
      // TODO: Handle errors.
      // Make a request to our server that will then request a message and nonce from the scorer API
      const scorerMessageResponse = await axios.get("/api/scorer-message");
      setNonce(scorerMessageResponse.data.nonce);

      // Have the user sign the message that was returned from the scorer api
      signMessage({ message: scorerMessageResponse.data.message });
      // After the user signs the message then request their score from the scorer API
      const { data } = await axios.get(`/api/score/${account.address}`);
      console.log("getScoreResp data: ", data);
      setPassportScore(data.score);
    }
    scorePassport();
  }, []);

  return (
    <div>
      <p>Your score is: {passportScore}</p>
    </div>
  );
}
