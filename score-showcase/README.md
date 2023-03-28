# Score Showcase

## Introduction

This sample app connects to a user's wallet, then fetches their passport score from the passport scorer API and displays it to them.

## Getting Started

### Create your API key and Scorer
1. Create your API key by going to [Gitcoin Passport Scorer](https://scorer.gitcoin.co) and clicking on the "API Keys" section.
  Then create a `.env` file and copy the contents of the `example.env` file into it.
  Replace `SCORER_API_KEY` with your API key.

1. Create a Scorer, by clicking on the "Scorer" section.
  Then create a `.env.local` file and copy the contents of the `example.env.local` file into it. Replace `NEXT_PUBLIC_SCORER_ID` with your Scorer ID.

### Start the app
Now you can start the app by running:

```bash
cd score-showcase && npm install
``` 
then 

```bash
npm run dev
```

Finally, you can navigate to `http://localhost:3000` to view the sample app.