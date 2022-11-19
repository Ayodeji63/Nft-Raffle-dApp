// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2],
      4: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc0, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _Bob_getTicket4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getTicket4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getTicket4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Data({
    Bob_getTicket0_69: ctc6,
    Bob_sRaffleNum0_69: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v288, v289, v291, v293, v311, v312, v313, v314, v315] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc3, ctc1, ctc1]);
  const v332 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:66:35:application call to [unknown function] (defined at: ./index.rsh:66:35:function exp)', 'at ./index.rsh:62:54:application call to "runBob_getTicket0_69" (defined at: ./index.rsh:66:10:function exp)', 'at ./index.rsh:62:54:application call to [unknown function] (defined at: ./index.rsh:62:54:function exp)'],
    msg: 'in',
    who: 'Bob_getTicket'
    });
  const v340 = ['Bob_getTicket0_69', v332];
  
  const txn1 = await (ctc.sendrecv({
    args: [v288, v289, v291, v293, v311, v312, v313, v314, v315, v340],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v291, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v364], secs: v366, time: v365, didSend: v177, from: v363 } = txn1;
      
      switch (v364[0]) {
        case 'Bob_getTicket0_69': {
          const v367 = v364[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_getTicket"
            });
          sim_r.txns.push({
            amt: v291,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v379 = v367[stdlib.checkedBigNumberify('./index.rsh:66:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v363, v379);
          sim_r.txns.push({
            kind: 'from',
            to: v288,
            tok: undefined /* Nothing */
            });
          const v385 = [v313, v379];
          const v386 = await txn1.getOutput('Bob_getTicket', 'v385', ctc7, v385);
          
          const v394 = stdlib.safeAdd(v312, stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, '1'));
          const v395 = stdlib.safeAdd(v314, stdlib.checkedBigNumberify('./index.rsh:74:45:decimal', stdlib.UInt_max, '1'));
          const v910 = v394;
          const v911 = v363;
          const v912 = v395;
          const v913 = v365;
          const v915 = stdlib.le(v315, v311);
          if (v915) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v363,
              tok: v289
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v289
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Bob_sRaffleNum0_69': {
          const v430 = v364[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc3, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v364], secs: v366, time: v365, didSend: v177, from: v363 } = txn1;
  switch (v364[0]) {
    case 'Bob_getTicket0_69': {
      const v367 = v364[1];
      undefined /* setApiDetails */;
      ;
      const v379 = v367[stdlib.checkedBigNumberify('./index.rsh:66:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v363, v379);
      ;
      const v385 = [v313, v379];
      const v386 = await txn1.getOutput('Bob_getTicket', 'v385', ctc7, v385);
      if (v177) {
        stdlib.protect(ctc0, await interact.out(v367, v386), {
          at: './index.rsh:66:11:application',
          fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:11:function exp)', 'at ./index.rsh:73:14:application call to "ret" (defined at: ./index.rsh:69:15:function exp)', 'at ./index.rsh:69:15:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
          msg: 'out',
          who: 'Bob_getTicket'
          });
        }
      else {
        }
      
      const v394 = stdlib.safeAdd(v312, stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, '1'));
      const v395 = stdlib.safeAdd(v314, stdlib.checkedBigNumberify('./index.rsh:74:45:decimal', stdlib.UInt_max, '1'));
      const v910 = v394;
      const v911 = v363;
      const v912 = v395;
      const v913 = v365;
      const v915 = stdlib.le(v315, v311);
      if (v915) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Bob_sRaffleNum0_69': {
      const v430 = v364[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_sRaffleNum4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_sRaffleNum4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_sRaffleNum4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Bob_getTicket0_69: ctc7,
    Bob_sRaffleNum0_69: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v288, v289, v291, v293, v311, v312, v313, v314, v315] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc3, ctc1, ctc1]);
  const v344 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:78:38:application call to [unknown function] (defined at: ./index.rsh:78:38:function exp)', 'at ./index.rsh:62:54:application call to "runBob_sRaffleNum0_69" (defined at: ./index.rsh:78:10:function exp)', 'at ./index.rsh:62:54:application call to [unknown function] (defined at: ./index.rsh:62:54:function exp)'],
    msg: 'in',
    who: 'Bob_sRaffleNum'
    });
  const v356 = ['Bob_sRaffleNum0_69', v344];
  
  const txn1 = await (ctc.sendrecv({
    args: [v288, v289, v291, v293, v311, v312, v313, v314, v315, v356],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v364], secs: v366, time: v365, didSend: v177, from: v363 } = txn1;
      
      switch (v364[0]) {
        case 'Bob_getTicket0_69': {
          const v367 = v364[1];
          
          break;
          }
        case 'Bob_sRaffleNum0_69': {
          const v430 = v364[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_sRaffleNum"
            });
          ;
          const v461 = v430[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '0')];
          const v462 = v430[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '1')];
          const v465 = null;
          const v466 = await txn1.getOutput('Bob_sRaffleNum', 'v465', ctc0, v465);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc3, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v364], secs: v366, time: v365, didSend: v177, from: v363 } = txn1;
  switch (v364[0]) {
    case 'Bob_getTicket0_69': {
      const v367 = v364[1];
      return;
      break;
      }
    case 'Bob_sRaffleNum0_69': {
      const v430 = v364[1];
      undefined /* setApiDetails */;
      ;
      const v461 = v430[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '0')];
      const v462 = v430[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '1')];
      const v465 = null;
      const v466 = await txn1.getOutput('Bob_sRaffleNum', 'v465', ctc0, v465);
      if (v177) {
        stdlib.protect(ctc0, await interact.out(v430, v466), {
          at: './index.rsh:78:11:application',
          fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:11:function exp)', 'at ./index.rsh:82:14:application call to "ret" (defined at: ./index.rsh:81:15:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
          msg: 'out',
          who: 'Bob_sRaffleNum'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    deadline: ctc1,
    nftId: ctc3,
    numTickets: ctc1,
    ticketPrice: ctc1
    });
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc9 = stdlib.T_Data({
    Bob_getTicket0_69: ctc6,
    Bob_sRaffleNum0_69: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v273 = stdlib.protect(ctc1, interact.winningNum, 'for Owner\'s interact field winningNum');
  
  const v276 = stdlib.protect(ctc4, await interact.settingRaffle(), {
    at: './index.rsh:48:29:application',
    fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:17:function exp)'],
    msg: 'settingRaffle',
    who: 'Owner'
    });
  const v277 = v276.deadline;
  const v278 = v276.nftId;
  const v279 = v276.numTickets;
  const v280 = v276.ticketPrice;
  const v285 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:51:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:17:function exp)'],
    msg: 'random',
    who: 'Owner'
    });
  const v286 = stdlib.digest([ctc1, ctc1], [v285, v273]);
  stdlib.protect(ctc0, await interact.startRaffle(), {
    at: './index.rsh:53:25:application',
    fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:17:function exp)'],
    msg: 'startRaffle',
    who: 'Owner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v278, v279, v280, v277, v286],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc1, ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v289, v290, v291, v292, v293], secs: v295, time: v294, didSend: v44, from: v288 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v289
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v289, v290, v291, v292, v293], secs: v295, time: v294, didSend: v44, from: v288 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v288, v289, v291, v292, v293, v294],
    evt_cnt: 0,
    funcNum: 1,
    lct: v294,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:24:13:decimal', stdlib.UInt_max, '1'), v289]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v302, time: v301, didSend: v51, from: v300 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:24:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v289
        });
      const v311 = stdlib.safeAdd(v294, v292);
      const v312 = stdlib.checkedBigNumberify('./index.rsh:62:56:decimal', stdlib.UInt_max, '0');
      const v313 = v288;
      const v314 = stdlib.checkedBigNumberify('./index.rsh:62:59:decimal', stdlib.UInt_max, '0');
      const v315 = v301;
      const v316 = v294;
      
      if (await (async () => {
        const v329 = stdlib.le(v316, v311);
        
        return v329;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v313,
          tok: v289
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v289
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc3, ctc1, ctc1, ctc5, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v302, time: v301, didSend: v51, from: v300 } = txn2;
  ;
  ;
  const v309 = stdlib.addressEq(v288, v300);
  stdlib.assert(v309, {
    at: './index.rsh:57:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v311 = stdlib.safeAdd(v294, v292);
  let v312 = stdlib.checkedBigNumberify('./index.rsh:62:56:decimal', stdlib.UInt_max, '0');
  let v313 = v288;
  let v314 = stdlib.checkedBigNumberify('./index.rsh:62:59:decimal', stdlib.UInt_max, '0');
  let v315 = v301;
  let v316 = v294;
  
  let txn3 = txn2;
  while (await (async () => {
    const v329 = stdlib.le(v316, v311);
    
    return v329;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v364], secs: v366, time: v365, didSend: v177, from: v363 } = txn4;
    switch (v364[0]) {
      case 'Bob_getTicket0_69': {
        const v367 = v364[1];
        undefined /* setApiDetails */;
        ;
        const v379 = v367[stdlib.checkedBigNumberify('./index.rsh:66:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v363, v379);
        ;
        const v385 = [v313, v379];
        await txn4.getOutput('Bob_getTicket', 'v385', ctc8, v385);
        const v394 = stdlib.safeAdd(v312, stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, '1'));
        const v395 = stdlib.safeAdd(v314, stdlib.checkedBigNumberify('./index.rsh:74:45:decimal', stdlib.UInt_max, '1'));
        const cv312 = v394;
        const cv313 = v363;
        const cv314 = v395;
        const cv315 = v365;
        const cv316 = v315;
        
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        v315 = cv315;
        v316 = cv316;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Bob_sRaffleNum0_69': {
        const v430 = v364[1];
        undefined /* setApiDetails */;
        ;
        const v461 = v430[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '0')];
        const v462 = v430[stdlib.checkedBigNumberify('./index.rsh:78:10:spread', stdlib.UInt_max, '1')];
        const v465 = null;
        await txn4.getOutput('Bob_sRaffleNum', 'v465', ctc0, v465);
        const txn5 = await (ctc.sendrecv({
          args: [v288, v289, v291, v293, v311, v312, v314, v365, v461, v462, v285, v273],
          evt_cnt: 2,
          funcNum: 4,
          lct: v365,
          onlyIf: true,
          out_tys: [ctc1, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:88:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [v476, v477], secs: v479, time: v478, didSend: v223, from: v475 } = txn5;
            
            ;
            const v483 = stdlib.eq(v462, v477);
            if (v483) {
              const v489 = stdlib.safeSub(v312, stdlib.checkedBigNumberify('./index.rsh:93:29:decimal', stdlib.UInt_max, '1'));
              const v490 = stdlib.safeSub(v314, stdlib.checkedBigNumberify('./index.rsh:93:45:decimal', stdlib.UInt_max, '1'));
              const cv312 = v489;
              const cv313 = v461;
              const cv314 = v490;
              const cv315 = v478;
              const cv316 = v365;
              
              await (async () => {
                const v312 = cv312;
                const v313 = cv313;
                const v314 = cv314;
                const v315 = cv315;
                const v316 = cv316;
                
                if (await (async () => {
                  const v329 = stdlib.le(v316, v311);
                  
                  return v329;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v313,
                    tok: v289
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v289
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}
            else {
              await stdlib.simMapSet(sim_r, 0, v475, undefined /* Nothing */);
              const v485 = stdlib.safeSub(v312, stdlib.checkedBigNumberify('./index.rsh:93:29:decimal', stdlib.UInt_max, '1'));
              const v486 = stdlib.safeSub(v314, stdlib.checkedBigNumberify('./index.rsh:93:45:decimal', stdlib.UInt_max, '1'));
              const cv312 = v485;
              const cv313 = v461;
              const cv314 = v486;
              const cv315 = v478;
              const cv316 = v365;
              
              await (async () => {
                const v312 = cv312;
                const v313 = cv313;
                const v314 = cv314;
                const v315 = cv315;
                const v316 = cv316;
                
                if (await (async () => {
                  const v329 = stdlib.le(v316, v311);
                  
                  return v329;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v313,
                    tok: v289
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v289
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc3, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [v476, v477], secs: v479, time: v478, didSend: v223, from: v475 } = txn5;
        ;
        const v480 = stdlib.addressEq(v288, v475);
        stdlib.assert(v480, {
          at: './index.rsh:88:17:dot',
          fs: ['at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
          msg: 'sender correct',
          who: 'Owner'
          });
        const v481 = stdlib.digest([ctc1, ctc1], [v476, v477]);
        const v482 = stdlib.digestEq(v293, v481);
        stdlib.assert(v482, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:89:26:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
          msg: null,
          who: 'Owner'
          });
        const v483 = stdlib.eq(v462, v477);
        if (v483) {
          const v489 = stdlib.safeSub(v312, stdlib.checkedBigNumberify('./index.rsh:93:29:decimal', stdlib.UInt_max, '1'));
          const v490 = stdlib.safeSub(v314, stdlib.checkedBigNumberify('./index.rsh:93:45:decimal', stdlib.UInt_max, '1'));
          const cv312 = v489;
          const cv313 = v461;
          const cv314 = v490;
          const cv315 = v478;
          const cv316 = v365;
          
          v312 = cv312;
          v313 = cv313;
          v314 = cv314;
          v315 = cv315;
          v316 = cv316;
          
          txn3 = txn5;
          continue;}
        else {
          await stdlib.mapSet(map0, v475, undefined /* Nothing */);
          const v485 = stdlib.safeSub(v312, stdlib.checkedBigNumberify('./index.rsh:93:29:decimal', stdlib.UInt_max, '1'));
          const v486 = stdlib.safeSub(v314, stdlib.checkedBigNumberify('./index.rsh:93:45:decimal', stdlib.UInt_max, '1'));
          const cv312 = v485;
          const cv313 = v461;
          const cv314 = v486;
          const cv315 = v478;
          const cv316 = v365;
          
          v312 = cv312;
          v313 = cv313;
          v314 = cv314;
          v315 = cv315;
          v316 = cv316;
          
          txn3 = txn5;
          continue;}
        
        
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function Bob_getTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_getTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_getTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Bob_getTicket4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_sRaffleNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_sRaffleNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_sRaffleNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Bob_sRaffleNum4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_getTicket(uint64)(address,uint64)`, `Bob_sRaffleNum(address,uint64)byte[0]`],
    pure: [],
    sigs: [`Bob_getTicket(uint64)(address,uint64)`, `Bob_sRaffleNum(address,uint64)byte[0]`]
    },
  appApproval: `ByANAAEEIAgFKFgJtd7piAwDUKCNBiYDAQABAQAiNQAxGEEEGypkSSJbNQEhBFs1AjEZIxJBAAoxACghCK9mQgPnNhoAF0lBADgiNQQjNQZJIQkMQAATIQkSRDYaATX/KDT/UDIDUEIA94HJ7ujjCBJENhoBNhoCUDX/KTT/UEIA3zYaAhc1BDYaAzYaARdJIQoMQAHpSSQMQADEJBJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8lWzX+IQZbNf1XMCA1/CELWzX7IQdbNfqBYFs1+YFoWzX4V3AgNfdJNQVJIls19iEEWzX1gAQQRq1zNPYWUDT1FlCwNP8xABJENPw09hY09RZQARJENAOBkAFbNPUSQQAbNP80/jT9NPw0+zT6Iwk09zT5IwkyBjT4QgIwMQAoIQivZjT/NP40/TT8NPs0+iMJNPc0+SMJMgY0+EICDkgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8lWzX+IQZbNf1XMCA1/CELWzX7IQdbNfqBgAFbNflJNQU1+IAEUX8cODT4ULA0+CJVQABpNPhXAQg19zT9iAKcNPcXNfYxACgpNPYWUGaxIrIBNP2yCCOyEDT/sgezgAgAAAAAAAABgTQDV2AgNPYWUFCwNANXYCA09hZQNQc0/zT+NP00/DT7NPojCDEANPkjCDIGNAOBiAFbQgFPNPhXASg19zT3VwAgNfY09yVbNfWACAAAAAAAAAHRsCo1BzT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlAyBhZQNPZQNPUWUChLAVcAf2cpSwFXfxlnSCEFNQEyBjUCQgGNSSMMQABcIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf4hB1s1/YAEmouRdLAjNP6IAbw0/zEAEkQ0/zT+NAMhBls0A1c4IDT9NAOBMFsIIjT/IjIGNP1CAI1IIQyIAXciNAESRDQESSISTDQCEhFESTUFSUpJIls1/yEEWzX+gRBbNf2BGFs1/FcgIDX7gAQ0TgeDNP8WUDT+FlA0/RZQNPwWUDT7ULAhDIgBKrEisgEishIkshAyCrIUNP+yEbMxADT/FlA0/RZQNPwWUDT7UDIGFlAoSwFXAGBnSCM1ATIGNQJCAJ41/zX+Nf01/DX7Nfo1+TX4Nfc19jT/NPoOQQA5NPY09xZQNPgWUDT5UDT6FlA0+xZQNPxQNP0WUDT+FlAoSwFXAH9nKUsBV38RZ0gkNQEyBjUCQgBJsSKyASOyEiSyEDT8shQ097IRs7EisgEishIkshAyCbIVMgqyFDT3shGzQgAAMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEKMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 152,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v289",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v293",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v289",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v293",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Bob_getTicket0_69",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Bob_sRaffleNum0_69",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v364",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v476",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v477",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v385",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v465",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_getTicket",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T11",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Bob_sRaffleNum",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Bob_getTicket0_69",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Bob_sRaffleNum0_69",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v364",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v476",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v477",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001ff638038062001ff683398101604081905262000026916200030c565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152818401516080808501919091529082015160a0840152015160c082015290517f329e01b8be46df29459e1d2184a1ec9ad22dcf40f152acfd777a1e2b39e4cf7a9181900360e00190a1620000b734156007620001d4565b620001036040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b33815260208083018051516001600160a01b0316828401528051604090810151818501528151606090810151908501529051608090810151908401524360a08401819052600160008190555551620001a59183910181516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b60405160208183030381529060405260029080519060200190620001cb929190620001fe565b505050620003e3565b81620001fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200020c90620003a6565b90600052602060002090601f0160209004810192826200023057600085556200027b565b82601f106200024b57805160ff19168380011785556200027b565b828001600101855582156200027b579182015b828111156200027b5782518255916020019190600101906200025e565b50620002899291506200028d565b5090565b5b808211156200028957600081556001016200028e565b604080519081016001600160401b0381118282101715620002d557634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620002d557634e487b7160e01b600052604160045260246000fd5b600081830360c08112156200032057600080fd5b6200032a620002a4565b8351815260a0601f19830112156200034157600080fd5b6200034b620002db565b60208501519092506001600160a01b03811681146200036957600080fd5b8083525060408401516020830152606084015160408301526080840151606083015260a08401516080830152816020820152809250505092915050565b600181811c90821680620003bb57607f821691505b60208210811415620003dd57634e487b7160e01b600052602260045260246000fd5b50919050565b611c0380620003f36000396000f3fe6080604052600436106100845760003560e01c806342e7114d1161005657806342e7114d146101045780638323075714610124578063ab53f2c614610139578063c2ded3b61461015c578063ebdbfdcc1461017f57005b80631e93b0f11461008d57806324c1c875146100b15780632c10a159146100c45780633bc5b7bf146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004611418565b610192565b61008b6100d2366004611430565b6101d1565b3480156100e357600080fd5b506100f76100f2366004611457565b61020c565b6040516100a891906114a8565b6101176101123660046114d8565b610238565b6040516100a891906114f1565b34801561013057600080fd5b5060015461009e565b34801561014557600080fd5b5061014e610255565b6040516100a892919061153d565b61016f61016a366004611577565b6102f2565b60405190151581526020016100a8565b61008b61018d3660046115a3565b610305565b60408051608081018252600091810182815260608201839052815260208101919091526101cd6101c7368490038401846116b2565b82610340565b5050565b60408051608081018252600091810182815260608201839052815260208101919091526101cd61020636849003840184611791565b82610775565b604080516060810182526000808252602082018190529181019190915261023282610974565b92915050565b604080518082019091526000808252602082015261023282610a47565b60006060600054600280805461026a906117f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610296906117f5565b80156102e35780601f106102b8576101008083540402835291602001916102e3565b820191906000526020600020905b8154815290600101906020018083116102c657829003601f168201915b50505050509050915091509091565b60006102fe8383610aa9565b9392505050565b60408051608081018252600091810182815260608201839052815260208101919091526101cd61033a3684900384018461182a565b82610b12565b610350600460005414600f610d98565b815161036b90158061036457508251600154145b6010610d98565b60008080556002805461037d906117f5565b80601f01602080910402602001604051908101604052809291908181526020018280546103a9906117f5565b80156103f65780601f106103cb576101008083540402835291602001916103f6565b820191906000526020600020905b8154815290600101906020018083116103d957829003601f168201915b505050505080602001905181019061040e919061188f565b9050610418611235565b7ffe7738a976fd74cd5f398888e3d626abf6352b7a3024be2c00fc0ea65368afd8338560405161044992919061191d565b60405180910390a1600060208501515151600181111561046b5761046b611474565b14156105f9576020808501515101518152604082015161048e903414600d610d98565b33600090815260046020526040808220805460ff19166001908117825584515191015583518482015191516001600160a01b039091169282156108fc02929190818181858888f193505050501580156104eb573d6000803e3d6000fd5b5060c0820151602080830180516001600160a01b03909316909252825151825190910152516040517f439e12b5ec67082d1c05dbdb21c2f679efd8a52275b54dbe572d8cc01c68c20a9161053e916114f1565b60405180910390a16020810151835261055561128e565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a08301516105a7906001610dbe565b602080830180519290925290513391015260e08301516105c8906001610dbe565b602082018051604001919091528051436060909101526101008401519051608001526105f381610e0b565b5061076f565b600160208501515151600181111561061357610613611474565b141561076f57602084015151604090810151908201526106353415600e610d98565b604051600081527f568349501736a1b1a5ca88a1850c786166087534e22af2926a73b5e74158ba0b9060200160405180910390a16000602080850182905260408051610140810182528381529182018390528101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b03908116825260208085015182168184015260408086015181850152606080870151908501526080808701519085015260a0808701519085015260e08087015160c08601524390850181905285820180515190941661010086015292518201516101208501526005600055600192909255905161074891839101611987565b6040516020818303038152906040526002908051906020019061076c929190611300565b50505b50505050565b610785600160005414600b610d98565b81516107a090158061079957508251600154145b600c610d98565b6000808055600280546107b2906117f5565b80601f01602080910402602001604051908101604052809291908181526020018280546107de906117f5565b801561082b5780601f106108005761010080835404028352916020019161082b565b820191906000526020600020905b81548152906001019060200180831161080e57829003601f168201915b50505050508060200190518101906108439190611a1c565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161089a34156008610d98565b6108b46108ad3383602001516001610fd6565b6009610d98565b80516108cc906001600160a01b03163314600a610d98565b6108d461128e565b815181516001600160a01b039182169052602080840151835192169101526040808301518251909101526080820151815160609081019190915260a0830151908301516109219190610dbe565b815160809081019190915260208083018051600090819052855182516001600160a01b0390911693019290925280516040019190915280514360609091015260a084015190519091015261076f81610e0b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156109c0576109c0611474565b1415610a37576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a0157610a01611474565b6001811115610a1257610a12611474565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b6040805180820190915260008082526020820152610a63611384565b60208181018051516000908190529051518201518590526040805160808101825290810182815260608201839052815291820152610aa18282610340565b519392505050565b6000610ab3611384565b6020818101805151600190528051516040908101516001600160a01b038816905290515181015182018590528051608081018252600091810182815260608201839052815291820152610b068282610340565b60200151949350505050565b610b226005600054146014610d98565b8151610b3d901580610b3657508251600154145b6015610d98565b600080805560028054610b4f906117f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7b906117f5565b8015610bc85780601f10610b9d57610100808354040283529160200191610bc8565b820191906000526020600020905b815481529060010190602001808311610bab57829003601f168201915b5050505050806020019051810190610be09190611ab6565b604080513381528551602080830191909152808701518051838501520151606082015290519192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a919081900360800190a1610c3f34156011610d98565b8051610c57906001600160a01b031633146012610d98565b602080840151805190820151604051610ca593610c7f93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146013610d98565b8260200151602001518161012001511415610d6f57610cc261128e565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808083015182519091015260a0820151610d14906001610fec565b602080830180519290925261010084015191516001600160a01b0390921691015260c0820151610d45906001610fec565b6020820180516040019190915280514360609091015260e083015190516080015261076f81610e0b565b336000908152600460205260408120805461ffff1916815560010155610cc261128e565b505050565b816101cd5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610dcb8382611b65565b91508110156102325760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610db5565b80600001516080015181602001516080015111610fa157610e8c60405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518185015284516060908101518186015285516080908101519086015282860180515160a0870152805184015190941660c0860152835182015160e08601529251909201516101008401526004600055436001559051610f7d9183910181516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519083015260a0808401519083015260c0808401519091169082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610d93929190611300565b610fbd816000015160200151826020015160200151600161103b565b60008080556001819055610fd39060029061139e565b50565b6000610fe48385308561104f565b949350505050565b600082610ff98382611b7d565b91508111156102325760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610db5565b611046838383611129565b610d9357600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916110b691611b94565b60006040518083038185875af1925050503d80600081146110f3576040519150601f19603f3d011682016040523d82523d6000602084013e6110f8565b606091505b5091509150611109828260016111fa565b508080602001905181019061111e9190611bb0565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161118891611b94565b60006040518083038185875af1925050503d80600081146111c5576040519150601f19603f3d011682016040523d82523d6000602084013e6111ca565b606091505b50915091506111db828260026111fa565b50808060200190518101906111f09190611bb0565b9695505050505050565b606083156112095750816102fe565b8251156112195782518084602001fd5b60405163100960cb60e01b815260048101839052602401610db5565b60408051608081019091526000606082019081528190815260200161126a604080518082019091526000808252602082015290565b8152602001611289604080518082019091526000808252602082015290565b905290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526020016112896040518060a001604052806000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82805461130c906117f5565b90600052602060002090601f01602090048101928261132e5760008555611374565b82601f1061134757805160ff1916838001178555611374565b82800160010185558215611374579182015b82811115611374578251825591602001919060010190611359565b506113809291506113d4565b5090565b6040518060400160405280600081526020016112896113e9565b5080546113aa906117f5565b6000825580601f106113ba575050565b601f016020900490600052602060002090810190610fd391905b5b8082111561138057600081556001016113d5565b60408051608081018252600060208083018281528451918201855291815291928392611289929184019061126a565b600060a0828403121561142a57600080fd5b50919050565b60006040828403121561142a57600080fd5b6001600160a01b0381168114610fd357600080fd5b60006020828403121561146957600080fd5b81356102fe81611442565b634e487b7160e01b600052602160045260246000fd5b60028110610fd357634e487b7160e01b600052602160045260246000fd5b815160608201906114b88161148a565b808352506020830151151560208301526040830151604083015292915050565b6000602082840312156114ea57600080fd5b5035919050565b81516001600160a01b031681526020808301519082015260408101610232565b60005b8381101561152c578181015183820152602001611514565b8381111561076f5750506000910152565b8281526040602082015260008251806040840152611562816060850160208701611511565b601f01601f1916919091016060019392505050565b6000806040838503121561158a57600080fd5b823561159581611442565b946020939093013593505050565b60006060828403121561142a57600080fd5b6040805190810167ffffffffffffffff811182821017156115e657634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156115e657634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156115e657634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156115e657634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156115e657634e487b7160e01b600052604160045260246000fd5b600081830360a08112156116c557600080fd5b6116cd6115b5565b833581526080601f19830112156116e357600080fd5b6116eb6115ec565b6116f361161d565b60208601356002811061170557600080fd5b81526020603f198501121561171957600080fd5b6117216115ec565b60408701358152806020830152506040605f198501121561174157600080fd5b6117496115b5565b9350606086013561175981611442565b80855250608086013560208501528360408201528082525080602083015250809250505092915050565b8015158114610fd357600080fd5b6000604082840312156117a357600080fd5b6040516040810181811067ffffffffffffffff821117156117d457634e487b7160e01b600052604160045260246000fd5b6040528235815260208301356117e981611783565b60208201529392505050565b600181811c9082168061180957607f821691505b6020821081141561142a57634e487b7160e01b600052602260045260246000fd5b6000818303606081121561183d57600080fd5b6118456115b5565b833581526040601f198301121561185b57600080fd5b6118636115b5565b60208581013582526040909501358582015293810193909352509092915050565b8051610a4281611442565b600061012082840312156118a257600080fd5b6118aa61164e565b6118b383611884565b81526118c160208401611884565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526118fa60c08401611884565b60c082015260e08381015190820152610100928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160c0830191906119498161148a565b6040848101919091526020820151516060850152015161197f608084018280516001600160a01b03168252602090810151910152565b509392505050565b81516001600160a01b03168152610140810160208301516119b360208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151611a0b828501826001600160a01b03169052565b505061012092830151919092015290565b600060c08284031215611a2e57600080fd5b60405160c0810181811067ffffffffffffffff82111715611a5f57634e487b7160e01b600052604160045260246000fd5b6040528251611a6d81611442565b81526020830151611a7d81611442565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60006101408284031215611ac957600080fd5b611ad1611680565b611ada83611884565b8152611ae860208401611884565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100611b37818501611884565b90820152610120928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611b7857611b78611b4f565b500190565b600082821015611b8f57611b8f611b4f565b500390565b60008251611ba6818460208701611511565b9190910192915050565b600060208284031215611bc257600080fd5b81516102fe8161178356fea2646970667358221220415352f30094741684be6b22f7fb48102da7380c686bb8b597b57a1c919d50eb64736f6c634300080c0033`,
  BytecodeLen: 8182,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:56:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:98:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:62:54:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:87:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bob_getTicket": Bob_getTicket,
  "Bob_sRaffleNum": Bob_sRaffleNum,
  "Owner": Owner
  };
export const _APIs = {
  Bob: {
    getTicket: Bob_getTicket,
    sRaffleNum: Bob_sRaffleNum
    }
  };
