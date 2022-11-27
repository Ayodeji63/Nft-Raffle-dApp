import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const startingBalance = stdlib.parseCurrency(100);

console.log("Creating a test account for Alice");
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);
const fmt = (x) => stdlib.formatCurrency(x, 4);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
console.log(`Having the creator create a testing NFT`);

const theNFT = await stdlib.launchToken(accAlice, "Punk", "NFT", { supply: 1 });

const nftId = theNFT.id;
console.log(`token id is ${nftId}`);
const price = stdlib.parseCurrency(10);
const numOfTic = 10;
const deadline = 10;

const parameters = { nftId, price, numOfTic };
await accBob.tokenAccept(nftId);

const getBalance = async (who) => await stdlib.balancesOf(who, [null, nftId]);

const [amtA, amtNFTA] = await getBalance(accAlice);
const [amtB, amtNFTB] = await getBalance(accBob);

console.log(`Alice balance before is ${fmt(amtA)} and ${amtNFTA} of the NFT`);
console.log(`Bob balance before is ${fmt(amtB)} and ${amtNFTB} of the NFT`);

const OUTCOME = ["Bob Won The Raffle", "Bob Picked a Wrong Number"];

const common = (who) => ({
  seeOutcome: (outcome) => {
    console.log(`${who} saw outcome ${OUTCOME[outcome]}`);
  },
});
await Promise.all([
  ctcAlice.p.A({
    ...stdlib.hasRandom,
    ...common("Alice"),
    deadline: 10,
    setRaffle: () => {
      console.log(`Alice is setting the Raffle`, parameters);
      return parameters;
    },
    raffleNum: () => {
      const randNum = Math.floor(Math.random() * numOfTic + 1);
      console.log(`Alice set the raffle Num ${randNum}`);
      return randNum;
    },
  }),
  ctcBob.p.B({
    ...common("Bob"),
    seeParam: (price, ticketnum, nftId) => {
      const param = {
        price,
        ticketnum,
        nftId,
      };
      console.log(`Raffle parameters are`, param);
    },
    bNum: (tic) => {
      const randNum = Math.floor(Math.random() * tic + 1);
      console.log(`Bob Picked the num ${randNum}`);
      return randNum;
    },
  }),
]);

const [tamtA, tamtNFTA] = await getBalance(accAlice);
const [tamtB, tamtNFTB] = await getBalance(accBob);

console.log(`Alice balance after is ${fmt(tamtA)} and ${tamtNFTA} of the NFT`);
console.log(`Bob balance after is ${fmt(tamtB)} and ${tamtNFTB} of the NFT`);
