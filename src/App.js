import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./reach/build/index.main.mjs";
import { useEffect, useState } from "react";
import { views, Loader } from "./utils/";
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  TestView,
  WaitForAttacher,
} from "./screens";
import Dview, { RafflePage, SetRaffle } from "./screens/Dview.jsx";
import Header from "./components/Header.jsx";
import { RafflePrams } from "./screens/RafflePrams.jsx";
import Aview, { SeeParam } from "./screens/Aview.jsx";
import { data } from "autoprefixer";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [account, setAccount] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [contractInfo, setContractInfo] = useState();
  const [resolver, setResolver] = useState();
  const [appBody, setAppBody] = useState(false);
  const [nftId, setNftId] = useState(0);
  const [price, setPrice] = useState(0);
  const [numOfTic, setNumofTic] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [dataParam, setDataParam] = useState();
  const [img, setImg] = useState("");
  const [rafNum, setRafNum] = useState(0);
  const [text, setText] = useState("");
  const [buyTicket, setBuyTicket] = useState(false);
  const [sTN, setSTN] = useState("");
  const [sNId, setSNId] = useState("");
  const [seeResult, setSeeResult] = useState({
    raffleNum: 0,
    bNum: 0,
    see: false,
  });

  const fetchUrl = async (x) => {
    fetch(
      `https://algoindexer.testnet.algoexplorerapi.io/v2/transactions?asset-id=${x}&tx-type=acfg`
    )
      .then((res) => res.json())
      .then(async (data) => {
        if (data) {
          const param =
            data.transactions[0][Object.keys(data.transactions[0])[0]].params;
          setImg(param.url.slice(7));
          setDataParam(param);
          console.log(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        setAccount(account);
        setAppBody(true);
        setView(views.DEPLOY_OR_ATTACH);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      return result;
    },

    setAsA: (A = true) => {
      if (A) {
        setView(views.SET_WAGER);
        //  setIsAlice(true);
      } else {
        setView(views.PASTE_CONTRACT_INFO);
        //  setIsAlice(false);
      }
    },

    deploy: async () => {
      console.log(price);

      const contract = account.contract(backend);
      const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
      A.deadline = deadline;
      A.price = reach.parseCurrency(price);

      backend.A(contract, A);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER);
    },

    attach: async (contractInfo) => {
      console.log(sNId);
      const contract = account.contract(backend, JSON.parse(contractInfo));

      backend.B(contract, B);
      setView(views.ATTACHING);
    },
  };

  //Participant Objects
  const OUTCOME = ["Player Won The Raffle", "Player Picked a Wrong Number"];
  const Common = {
    random: () => reach.hasRandom.random(),
    test: () => setView(views.TEST_VIEW),
    seeOutcome: (num, raffleNum, bNum) => {
      setText(OUTCOME[num]);
      setSeeResult({
        raffleNum: `${raffleNum}`,
        bNum: `${bNum}`,
        see: true,
        text: `${OUTCOME[num]}`,
      });
      setBuyTicket(false);
      console.log(`${OUTCOME[num]}`);
    },
  };

  const param = {
    nftId,
    numOfTic,
  };

  const A = {
    ...Common,
    setRaffle: () => {
      // setParam({
      //   nftId: nftId,
      //   price: reach.parseCurrency(price),
      //   numOfTic: numOfTic,
      // });
      console.log(`this are params`, param);
      return param;
    },
    raffleNum: async () => {
      setView(views.RAFFLE_NUM);
      await fetchUrl(nftId);
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (num) => {
            console.log(`Alice set ${num}`);
            resolve(num);
          },
        });
      });
    },
  };

  const B = {
    ...Common,
    seeParam: async (price, ticketNum, nftId) => {
      setView(views.B_NUM);
      await fetchUrl(nftId);
      setPrice(price);
      setSTN(ticketNum);
      setSNId(nftId);
      await account.tokenAccept(nftId);
      console.log(`${price}, ${ticketNum}, ${nftId}`);
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: async () => {
            resolve();
          },
        });
      });
    },
    bNum: async () => {
      setBuyTicket(true);
      await fetchUrl(nftId);
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (num) => {
            console.log(`Alice set ${num}`);
            resolve(num);
          },
        });
      });
    },
  };
  console.log(nftId);
  return (
    <div className="App">
      {view === views.CONNECT_ACCOUNT && (
        <ConnectAccount connect={reachFunctions.connect} />
      )}
      {appBody && (
        <div className="App-body">
          <Header />
          {view === views.DEPLOY_OR_ATTACH && (
            <SelectRole setAsA={reachFunctions.setAsA} />
          )}
          {view == views.SET_WAGER && (
            <SetRaffle
              deploy={reachFunctions.deploy}
              nftId={nftId}
              setNftId={setNftId}
              price={price}
              setPrice={setPrice}
              numOfTic={numOfTic}
              setNumOFTic={setNumofTic}
              deadline={deadline}
              setDeadline={setDeadline}
              reach={reach}
            />
          )}
          {view === views.D_VIEW && <Dview />}
          {(view === views.DEPLOYING || view === views.ATTACHING) && <Loader />}

          {view === views.PASTE_CONTRACT_INFO && (
            <PasteContractInfo attach={reachFunctions.attach} />
          )}

          {view == views.RAFFLE_NUM && (
            <RafflePage
              src={img}
              raffleNum={resolver.resolve}
              rafNum={rafNum}
              setRafNum={setRafNum}
              nftId={nftId}
              numOfTic={numOfTic}
              price={price}
              data={dataParam}
              seeResult={seeResult}
            />
          )}

          {view === views.WAIT_FOR_ATTACHER && (
            <WaitForAttacher info={contractInfo} />
          )}

          {view == views.B_NUM && resolver && (
            <Aview
              text={text}
              buyTicket={buyTicket}
              src={img}
              submit={resolver.resolve}
              price={fmt(price)}
              data={dataParam}
              numOfTic={sTN}
              nftId={sNId}
              seeResult={seeResult}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
