import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating a test account for Owner`);
const accOwner = await stdlib.newTestAccount(startingBalance);

console.log(`Having the creator create a testing NFT`);

const theNFT = await stdlib.launchToken(accOwner, "Punk", "NFT", { supply: 1 });

const nftId = theNFT.id;
const numTickets = 5;
const ticketPrice = stdlib.parseCurrency(5);
const deadline = 10;

const params = { nftId, numTickets, ticketPrice, deadline };

const ctcOwner = accOwner.contract(backend);
await ctcOwner.participants.Owner({
  settingRaffle: () => {
    console.log(`Creator set parameters for the Raffle:`, params);
    return params;
  },
  winningNum: 5,
  startRaffle: () => {
    startBobs();
  },
  seeWinner: (winner, num) => {
    console.log(
      `Creator saw that ${stdlib.formatAddress(winner)} won, who picked ${num}`
    );
  },
});
