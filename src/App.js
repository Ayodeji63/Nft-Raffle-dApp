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
  const [fetchData, setFetchData] = useState(false);
  const [dataParam, setDataParam] = useState();
  const [img, setImg] = useState();
  console.log(price);
  const fetchUrl = async (x) => {
    fetch(x)
      .then((res) => res.json())
      .then(async (data) => {
        if (data) {
          const param =
            data.transactions[0][Object.keys(data.transactions[0])[0]].params;
          setImg(param.url.slice(7));
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setFetchData(true);
  };

  // useEffect(() => {
  //   fetchUrl(
  //     `https://algoindexer.testnet.algoexplorerapi.io/v2/transactions?asset-id=${145069460}&tx-type=acfg`
  //   );
  // }, [fetchData]);

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
      const contract = account.contract(backend);
      const deadline = { ETH: 10, ALGO: 10, CFX: 1000 }[reach.connector];
      A.deadline = deadline;
      backend.A(contract, A);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER);
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.B(contract, B);
      setView(views.ATTACHING);
    },
  };

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),
    test: () => setView(views.TEST_VIEW),
  };

  const params = {
    nftId,
    price,
    numOfTic,
  };

  const A = {
    ...Common,
    setRaffle: () => {
      console.log(`this are params`, params);
      return params;
    },
    raffleNum: async () => {
      setView(views.RAFFLE_NUM);
      await fetchUrl(nftId);
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (num) => {
            resolve(num);
          },
        });
      });
    },
  };

  const B = {
    ...Common,
    bNum: async (price, ticketNum, nftId) => {
      await fetchUrl(nftId);
      setView(views.B_NUM);
      console.log(`${price}, ${ticketNum}, ${nftId}`);
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (num) => {
            resolve(num);
          },
        });
      });
    },
  };
  console.log(nftId);
  return (
    <div className="App">
      {/* {img && <img src={`https://${img}.ipfs.dweb.link/`} />} */}
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
            />
          )}
          {view === views.D_VIEW && <Dview />}
          {(view === views.DEPLOYING || view === views.ATTACHING) && <Loader />}

          {view === views.PASTE_CONTRACT_INFO && (
            <PasteContractInfo attach={reachFunctions.attach} />
          )}

          {view == views.RAFFLE_NUM && (
            <RafflePage raffleNum={resolver.resolve} />
          )}

          {view === views.WAIT_FOR_ATTACHER && (
            <WaitForAttacher info={contractInfo} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
