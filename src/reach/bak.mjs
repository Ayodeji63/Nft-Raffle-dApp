import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating a test account for Owner`);
const accOwner = await stdlib.newTestAccount(startingBalance);
const ctcOwner = accOwner.contract(backend);

console.log(`Having the creator create a testing NFT`);

const theNFT = await stdlib.launchToken(accOwner, "Punk", "NFT", { supply: 1 });

const nftId = theNFT.id;
const numTickets = 5;
const ticketPrice = stdlib.parseCurrency(5);
const deadline = 10;

const params = { nftId, numTickets, ticketPrice, deadline };

const Bobs = [];
const randNum = () => {
  const num = Math.floor(Math.random() * 5);
  return num;
};
const acc = await stdlib.newTestAccount(startingBalance);
await acc.tokenAccept(nftId);
const ctc = acc.contract(backend, ctcOwner.getInfo());

const startBobs = async () => {
  const runBidder = async (who) => {
    Bobs.push([who, acc]);
    acc.setDebugLabel(who);
    const getBal = async () =>
      stdlib.formatCurrency(await stdlib.balanceOf(acc));
    console.log(`${who} picked ${randNum()}`);
    console.log(`${who} balance before is ${await getBal()}`);

    try {
      const [Bob, ticket] = await ctc.apis.Bob.getTicket(randNum());
      console.log(`${Bob} draw ${ticket}`);
    } catch (e) {
      console.log(`${who} couldn't buy ticket, because the raffle is over`);
    }
    console.log(`${who} balance after buying ticket ${await getBal()}`);
  };

  await runBidder("Oz");
  await runBidder("Bob");
  await runBidder("Claire");
};

await ctcOwner.participants.Owner({
  ...stdlib.hasRandom,
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
