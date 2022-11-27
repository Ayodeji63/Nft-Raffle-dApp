// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = "0.1.12";
export const _versionHash = "0.1.12 (0b231964)";
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(
    ctc4,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc6 = stdlib.T_Digest;

  return {
    infos: {},
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc5],
      2: [ctc0, ctc1, ctc2, ctc2, ctc5],
      3: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc2, ctc6],
      6: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc6, ctc2, ctc2],
      8: [ctc0, ctc1, ctc2, ctc0, ctc6, ctc2],
    },
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0,
  };
}
export async function A(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for A expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for A expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    nftId: ctc1,
    numOfTic: ctc0,
  });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc6]);
  const ctc8 = stdlib.T_Array(
    ctc7,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );

  const v256 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false,
  ];
  const v257 = [v256];
  const v272 = stdlib.protect(
    ctc0,
    interact.deadline,
    "for A's interact field deadline"
  );
  const v273 = stdlib.protect(
    ctc0,
    interact.price,
    "for A's interact field price"
  );

  const v276 = stdlib.protect(ctc2, await interact.setRaffle(), {
    at: "./index.rsh:68:62:application",
    fs: [
      "at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)",
    ],
    msg: "setRaffle",
    who: "A",
  });
  const v277 = v276.nftId;
  const v278 = v276.numOfTic;

  const txn1 = await ctc.sendrecv({
    args: [v277, v273, v278, v272],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./index.rsh:70:5:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc0],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:70:5:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [v282, v283, v284, v285],
        secs: v287,
        time: v286,
        didSend: v60,
        from: v281,
      } = txn1;

      const v288 =
        v257[
          stdlib.checkedBigNumberify(
            "./index.rsh:70:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v289 = stdlib.Array_set(
        v288,
        "0",
        stdlib.checkedBigNumberify("./index.rsh:70:5:dot", stdlib.UInt_max, "0")
      );
      const v290 = stdlib.Array_set(
        v257,
        stdlib.checkedBigNumberify(
          "./index.rsh:70:5:dot",
          stdlib.UInt_max,
          "0"
        ),
        v289
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v282,
      });
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false,
  });
  const {
    data: [v282, v283, v284, v285],
    secs: v287,
    time: v286,
    didSend: v60,
    from: v281,
  } = txn1;
  const v288 =
    v257[
      stdlib.checkedBigNumberify("./index.rsh:70:5:dot", stdlib.UInt_max, "0")
    ];
  const v289 = stdlib.Array_set(
    v288,
    "0",
    stdlib.checkedBigNumberify("./index.rsh:70:5:dot", stdlib.UInt_max, "0")
  );
  const v290 = stdlib.Array_set(
    v257,
    stdlib.checkedBigNumberify("./index.rsh:70:5:dot", stdlib.UInt_max, "0"),
    v289
  );
  const txn2 = await ctc.sendrecv({
    args: [v281, v282, v283, v285, v290],
    evt_cnt: 0,
    funcNum: 1,
    lct: v286,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify("./index.rsh:73:5:dot", stdlib.UInt_max, "0"),
      [
        [
          stdlib.checkedBigNumberify(
            "./index.rsh:39:13:decimal",
            stdlib.UInt_max,
            "1"
          ),
          v282,
        ],
      ],
    ],
    sim_p: async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [],
        secs: v294,
        time: v293,
        didSend: v67,
        from: v292,
      } = txn2;

      const v295 =
        v290[
          stdlib.checkedBigNumberify(
            "./index.rsh:73:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v296 =
        v295[
          stdlib.checkedBigNumberify(
            "./index.rsh:73:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v297 = stdlib.add(
        v296,
        stdlib.checkedBigNumberify(
          "./index.rsh:39:13:decimal",
          stdlib.UInt_max,
          "1"
        )
      );
      const v299 = stdlib.Array_set(v295, "0", v297);
      const v300 = stdlib.Array_set(
        v290,
        stdlib.checkedBigNumberify(
          "./index.rsh:73:5:dot",
          stdlib.UInt_max,
          "0"
        ),
        v299
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify(
          "./index.rsh:39:13:decimal",
          stdlib.UInt_max,
          "1"
        ),
        kind: "to",
        tok: v282,
      });
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0, ctc0, ctc8],
    waitIfNotPresent: false,
  });
  const {
    data: [],
    secs: v294,
    time: v293,
    didSend: v67,
    from: v292,
  } = txn2;
  const v295 =
    v290[
      stdlib.checkedBigNumberify("./index.rsh:73:5:dot", stdlib.UInt_max, "0")
    ];
  const v296 =
    v295[
      stdlib.checkedBigNumberify("./index.rsh:73:5:dot", stdlib.UInt_max, "0")
    ];
  const v297 = stdlib.add(
    v296,
    stdlib.checkedBigNumberify(
      "./index.rsh:39:13:decimal",
      stdlib.UInt_max,
      "1"
    )
  );
  const v299 = stdlib.Array_set(v295, "0", v297);
  const v300 = stdlib.Array_set(
    v290,
    stdlib.checkedBigNumberify("./index.rsh:73:5:dot", stdlib.UInt_max, "0"),
    v299
  );
  const v301 = stdlib.addressEq(v281, v292);
  stdlib.assert(v301, {
    at: "./index.rsh:73:5:dot",
    fs: [],
    msg: "sender correct",
    who: "A",
  });
  const txn3 = await ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false,
  });
  const {
    data: [v305],
    secs: v307,
    time: v306,
    didSend: v75,
    from: v304,
  } = txn3;
  const v314 = stdlib.safeAdd(v306, v285);
  const v316 =
    v300[
      stdlib.checkedBigNumberify(
        "./index.rsh:88:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v317 =
    v316[
      stdlib.checkedBigNumberify(
        "./index.rsh:88:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v320 = stdlib.protect(ctc0, await interact.raffleNum(), {
    at: "./index.rsh:83:42:application",
    fs: [
      "at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:13:function exp)",
    ],
    msg: "raffleNum",
    who: "A",
  });
  const v321 = stdlib.protect(ctc0, await interact.random(), {
    at: "reach standard library:64:31:application",
    fs: [
      'at ./index.rsh:84:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)',
      "at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:13:function exp)",
    ],
    msg: "random",
    who: "A",
  });
  const v322 = stdlib.digest([ctc0, ctc0], [v321, v320]);

  const txn4 = await ctc.sendrecv({
    args: [v281, v282, v283, v285, v304, v314, v317, v322],
    evt_cnt: 1,
    funcNum: 3,
    lct: v306,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:87:5:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [v325],
        secs: v327,
        time: v326,
        didSend: v89,
        from: v324,
      } = txn4;

      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: ["time", v314],
    tys: [ctc5, ctc1, ctc0, ctc0, ctc5, ctc0, ctc0, ctc4],
    waitIfNotPresent: false,
  });
  if (txn4.didTimeout) {
    const txn5 = await ctc.sendrecv({
      args: [v281, v282, v283, v285, v304, v314, v317],
      evt_cnt: 0,
      funcNum: 4,
      lct: v306,
      onlyIf: true,
      out_tys: [],
      pay: [
        stdlib.checkedBigNumberify(
          "reach standard library:197:11:decimal",
          stdlib.UInt_max,
          "0"
        ),
        [],
      ],
      sim_p: async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [],
          secs: v417,
          time: v416,
          didSend: v204,
          from: v415,
        } = txn5;

        sim_r.txns.push({
          kind: "from",
          to: v281,
          tok: v282,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: v282,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;

        return sim_r;
      },
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc1, ctc0, ctc0, ctc5, ctc0, ctc0],
      waitIfNotPresent: false,
    });
    const {
      data: [],
      secs: v417,
      time: v416,
      didSend: v204,
      from: v415,
    } = txn5;
    const v418 = stdlib.addressEq(v281, v415);
    const v419 = stdlib.addressEq(v304, v415);
    const v420 = v418 ? true : v419;
    stdlib.assert(v420, {
      at: "reach standard library:197:11:dot",
      fs: [
        'at ./index.rsh:88:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "sender correct",
      who: "A",
    });
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: "./index.rsh:62:46:application",
      fs: [
        "at ./index.rsh:62:9:application call to [unknown function] (defined at: ./index.rsh:62:21:function exp)",
        'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:61:28:function exp)',
        'at ./index.rsh:88:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "informTimeout",
      who: "A",
    });

    return;
  } else {
    const {
      data: [v325],
      secs: v327,
      time: v326,
      didSend: v89,
      from: v324,
    } = txn4;
    const v328 = stdlib.addressEq(v281, v324);
    stdlib.assert(v328, {
      at: "./index.rsh:87:5:dot",
      fs: [],
      msg: "sender correct",
      who: "A",
    });
    const txn5 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v333],
      secs: v335,
      time: v334,
      didSend: v99,
      from: v332,
    } = txn5;
    const v336 = stdlib.addressEq(v304, v332);
    stdlib.assert(v336, {
      at: "./index.rsh:97:5:dot",
      fs: [],
      msg: "sender correct",
      who: "A",
    });
    const v343 = stdlib.safeAdd(v334, v285);
    const txn6 = await ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: ["time", v343],
      waitIfNotPresent: false,
    });
    if (txn6.didTimeout) {
      const txn7 = await ctc.sendrecv({
        args: [v281, v282, v283, v304, v317, v325, v333, v343],
        evt_cnt: 0,
        funcNum: 7,
        lct: v334,
        onlyIf: true,
        out_tys: [],
        pay: [
          stdlib.checkedBigNumberify(
            "reach standard library:197:11:decimal",
            stdlib.UInt_max,
            "0"
          ),
          [],
        ],
        sim_p: async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };

          const {
            data: [],
            secs: v389,
            time: v388,
            didSend: v163,
            from: v387,
          } = txn7;

          sim_r.txns.push({
            kind: "from",
            to: v281,
            tok: v282,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: v282,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined /* Nothing */,
          });
          sim_r.isHalt = true;

          return sim_r;
        },
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc0, ctc5, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false,
      });
      const {
        data: [],
        secs: v389,
        time: v388,
        didSend: v163,
        from: v387,
      } = txn7;
      const v390 = stdlib.addressEq(v281, v387);
      const v391 = stdlib.addressEq(v304, v387);
      const v392 = v390 ? true : v391;
      stdlib.assert(v392, {
        at: "reach standard library:197:11:dot",
        fs: [
          'at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
        ],
        msg: "sender correct",
        who: "A",
      });
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: "./index.rsh:62:46:application",
        fs: [
          "at ./index.rsh:62:9:application call to [unknown function] (defined at: ./index.rsh:62:21:function exp)",
          'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:61:28:function exp)',
          'at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
        ],
        msg: "informTimeout",
        who: "A",
      });

      return;
    } else {
      const {
        data: [],
        secs: v349,
        time: v348,
        didSend: v106,
        from: v347,
      } = txn6;
      const v352 = stdlib.addressEq(v304, v347);
      stdlib.assert(v352, {
        at: "./index.rsh:99:5:dot",
        fs: [],
        msg: "sender correct",
        who: "A",
      });
      const txn7 = await ctc.sendrecv({
        args: [v281, v282, v283, v304, v325, v333, v321, v320],
        evt_cnt: 2,
        funcNum: 8,
        lct: v348,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [
          stdlib.checkedBigNumberify(
            "./index.rsh:108:5:decimal",
            stdlib.UInt_max,
            "0"
          ),
          [],
        ],
        sim_p: async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };

          const {
            data: [v356, v357],
            secs: v359,
            time: v358,
            didSend: v116,
            from: v355,
          } = txn7;

          const v363 = stdlib.eq(v357, v333);
          const v364 = v363
            ? stdlib.checkedBigNumberify(
                "./index.rsh:19:30:decimal",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.checkedBigNumberify(
                "./index.rsh:19:34:decimal",
                stdlib.UInt_max,
                "1"
              );
          const v365 = stdlib.eq(
            v364,
            stdlib.checkedBigNumberify(
              "./index.rsh:makeEnum",
              stdlib.UInt_max,
              "0"
            )
          );
          const v366 = v365 ? v304 : v281;
          sim_r.txns.push({
            kind: "from",
            to: v366,
            tok: v282,
          });
          sim_r.txns.push({
            kind: "from",
            to: v281,
            tok: undefined /* Nothing */,
          });

          sim_r.txns.push({
            kind: "halt",
            tok: v282,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined /* Nothing */,
          });
          sim_r.isHalt = true;

          return sim_r;
        },
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc0, ctc5, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false,
      });
      const {
        data: [v356, v357],
        secs: v359,
        time: v358,
        didSend: v116,
        from: v355,
      } = txn7;
      const v360 = stdlib.addressEq(v281, v355);
      stdlib.assert(v360, {
        at: "./index.rsh:108:5:dot",
        fs: [],
        msg: "sender correct",
        who: "A",
      });
      const v361 = stdlib.digest([ctc0, ctc0], [v356, v357]);
      const v362 = stdlib.digestEq(v325, v361);
      stdlib.assert(v362, {
        at: "reach standard library:69:17:application",
        fs: [
          'at ./index.rsh:109:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
        ],
        msg: null,
        who: "A",
      });
      const v363 = stdlib.eq(v357, v333);
      const v364 = v363
        ? stdlib.checkedBigNumberify(
            "./index.rsh:19:30:decimal",
            stdlib.UInt_max,
            "0"
          )
        : stdlib.checkedBigNumberify(
            "./index.rsh:19:34:decimal",
            stdlib.UInt_max,
            "1"
          );
      const v365 = stdlib.eq(
        v364,
        stdlib.checkedBigNumberify("./index.rsh:makeEnum", stdlib.UInt_max, "0")
      );
      const v366 = v365 ? v304 : v281;
      stdlib.protect(ctc3, await interact.seeOutcome(v364, v357, v333), {
        at: "./index.rsh:114:41:application",
        fs: [
          "at ./index.rsh:114:7:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)",
        ],
        msg: "seeOutcome",
        who: "A",
      });

      return;
    }
  }
}
export async function B(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for B expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for B expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );

  const v256 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false,
  ];
  const v257 = [v256];
  const txn1 = await ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false,
  });
  const {
    data: [v282, v283, v284, v285],
    secs: v287,
    time: v286,
    didSend: v60,
    from: v281,
  } = txn1;
  const v288 =
    v257[
      stdlib.checkedBigNumberify("./index.rsh:70:5:dot", stdlib.UInt_max, "0")
    ];
  const v289 = stdlib.Array_set(
    v288,
    "0",
    stdlib.checkedBigNumberify("./index.rsh:70:5:dot", stdlib.UInt_max, "0")
  );
  const v290 = stdlib.Array_set(
    v257,
    stdlib.checkedBigNumberify("./index.rsh:70:5:dot", stdlib.UInt_max, "0"),
    v289
  );
  const txn2 = await ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false,
  });
  const {
    data: [],
    secs: v294,
    time: v293,
    didSend: v67,
    from: v292,
  } = txn2;
  const v295 =
    v290[
      stdlib.checkedBigNumberify("./index.rsh:73:5:dot", stdlib.UInt_max, "0")
    ];
  const v296 =
    v295[
      stdlib.checkedBigNumberify("./index.rsh:73:5:dot", stdlib.UInt_max, "0")
    ];
  const v297 = stdlib.add(
    v296,
    stdlib.checkedBigNumberify(
      "./index.rsh:39:13:decimal",
      stdlib.UInt_max,
      "1"
    )
  );
  const v299 = stdlib.Array_set(v295, "0", v297);
  const v300 = stdlib.Array_set(
    v290,
    stdlib.checkedBigNumberify("./index.rsh:73:5:dot", stdlib.UInt_max, "0"),
    v299
  );
  const v301 = stdlib.addressEq(v281, v292);
  stdlib.assert(v301, {
    at: "./index.rsh:73:5:dot",
    fs: [],
    msg: "sender correct",
    who: "B",
  });
  stdlib.protect(ctc2, await interact.seeParam(v283, v284, v282), {
    at: "./index.rsh:77:50:application",
    fs: [
      "at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)",
    ],
    msg: "seeParam",
    who: "B",
  });

  const txn3 = await ctc.sendrecv({
    args: [v281, v282, v283, v285, v300, null],
    evt_cnt: 1,
    funcNum: 2,
    lct: v293,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:79:5:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [v305],
        secs: v307,
        time: v306,
        didSend: v75,
        from: v304,
      } = txn3;

      const v314 = stdlib.safeAdd(v306, v285);
      const v316 =
        v300[
          stdlib.checkedBigNumberify(
            "./index.rsh:88:40:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v317 =
        v316[
          stdlib.checkedBigNumberify(
            "./index.rsh:88:40:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1, ctc7, ctc2],
    waitIfNotPresent: false,
  });
  const {
    data: [v305],
    secs: v307,
    time: v306,
    didSend: v75,
    from: v304,
  } = txn3;
  const v314 = stdlib.safeAdd(v306, v285);
  const v316 =
    v300[
      stdlib.checkedBigNumberify(
        "./index.rsh:88:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v317 =
    v316[
      stdlib.checkedBigNumberify(
        "./index.rsh:88:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const txn4 = await ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc3],
    timeoutAt: ["time", v314],
    waitIfNotPresent: false,
  });
  if (txn4.didTimeout) {
    const txn5 = await ctc.sendrecv({
      args: [v281, v282, v283, v285, v304, v314, v317],
      evt_cnt: 0,
      funcNum: 4,
      lct: v306,
      onlyIf: true,
      out_tys: [],
      pay: [
        stdlib.checkedBigNumberify(
          "reach standard library:197:11:decimal",
          stdlib.UInt_max,
          "0"
        ),
        [],
      ],
      sim_p: async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [],
          secs: v417,
          time: v416,
          didSend: v204,
          from: v415,
        } = txn5;

        sim_r.txns.push({
          kind: "from",
          to: v281,
          tok: v282,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: v282,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;

        return sim_r;
      },
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc1, ctc4, ctc1, ctc1],
      waitIfNotPresent: false,
    });
    const {
      data: [],
      secs: v417,
      time: v416,
      didSend: v204,
      from: v415,
    } = txn5;
    const v418 = stdlib.addressEq(v281, v415);
    const v419 = stdlib.addressEq(v304, v415);
    const v420 = v418 ? true : v419;
    stdlib.assert(v420, {
      at: "reach standard library:197:11:dot",
      fs: [
        'at ./index.rsh:88:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "sender correct",
      who: "B",
    });
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: "./index.rsh:62:46:application",
      fs: [
        "at ./index.rsh:62:9:application call to [unknown function] (defined at: ./index.rsh:62:21:function exp)",
        'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:61:28:function exp)',
        'at ./index.rsh:88:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "informTimeout",
      who: "B",
    });

    return;
  } else {
    const {
      data: [v325],
      secs: v327,
      time: v326,
      didSend: v89,
      from: v324,
    } = txn4;
    const v328 = stdlib.addressEq(v281, v324);
    stdlib.assert(v328, {
      at: "./index.rsh:87:5:dot",
      fs: [],
      msg: "sender correct",
      who: "B",
    });
    const v331 = stdlib.protect(ctc1, await interact.bNum(v284), {
      at: "./index.rsh:95:42:application",
      fs: [
        "at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:13:function exp)",
      ],
      msg: "bNum",
      who: "B",
    });

    const txn5 = await ctc.sendrecv({
      args: [v281, v282, v283, v285, v304, v317, v325, v331],
      evt_cnt: 1,
      funcNum: 5,
      lct: v326,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [
        stdlib.checkedBigNumberify(
          "./index.rsh:97:5:decimal",
          stdlib.UInt_max,
          "0"
        ),
        [],
      ],
      sim_p: async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [v333],
          secs: v335,
          time: v334,
          didSend: v99,
          from: v332,
        } = txn5;

        const v343 = stdlib.safeAdd(v334, v285);
        sim_r.isHalt = false;

        return sim_r;
      },
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc1, ctc4, ctc1, ctc3, ctc1],
      waitIfNotPresent: false,
    });
    const {
      data: [v333],
      secs: v335,
      time: v334,
      didSend: v99,
      from: v332,
    } = txn5;
    const v336 = stdlib.addressEq(v304, v332);
    stdlib.assert(v336, {
      at: "./index.rsh:97:5:dot",
      fs: [],
      msg: "sender correct",
      who: "B",
    });
    const v343 = stdlib.safeAdd(v334, v285);
    const txn6 = await ctc.sendrecv({
      args: [v281, v282, v283, v304, v317, v325, v333, v343],
      evt_cnt: 0,
      funcNum: 6,
      lct: v334,
      onlyIf: true,
      out_tys: [],
      pay: [v283, []],
      sim_p: async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [],
          secs: v349,
          time: v348,
          didSend: v106,
          from: v347,
        } = txn6;

        sim_r.txns.push({
          amt: v283,
          kind: "to",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = false;

        return sim_r;
      },
      soloSend: true,
      timeoutAt: ["time", v343],
      tys: [ctc4, ctc0, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1],
      waitIfNotPresent: false,
    });
    if (txn6.didTimeout) {
      const txn7 = await ctc.sendrecv({
        args: [v281, v282, v283, v304, v317, v325, v333, v343],
        evt_cnt: 0,
        funcNum: 7,
        lct: v334,
        onlyIf: true,
        out_tys: [],
        pay: [
          stdlib.checkedBigNumberify(
            "reach standard library:197:11:decimal",
            stdlib.UInt_max,
            "0"
          ),
          [],
        ],
        sim_p: async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };

          const {
            data: [],
            secs: v389,
            time: v388,
            didSend: v163,
            from: v387,
          } = txn7;

          sim_r.txns.push({
            kind: "from",
            to: v281,
            tok: v282,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: v282,
          });
          sim_r.txns.push({
            kind: "halt",
            tok: undefined /* Nothing */,
          });
          sim_r.isHalt = true;

          return sim_r;
        },
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc1, ctc4, ctc1, ctc3, ctc1, ctc1],
        waitIfNotPresent: false,
      });
      const {
        data: [],
        secs: v389,
        time: v388,
        didSend: v163,
        from: v387,
      } = txn7;
      const v390 = stdlib.addressEq(v281, v387);
      const v391 = stdlib.addressEq(v304, v387);
      const v392 = v390 ? true : v391;
      stdlib.assert(v392, {
        at: "reach standard library:197:11:dot",
        fs: [
          'at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
        ],
        msg: "sender correct",
        who: "B",
      });
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: "./index.rsh:62:46:application",
        fs: [
          "at ./index.rsh:62:9:application call to [unknown function] (defined at: ./index.rsh:62:21:function exp)",
          'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:61:28:function exp)',
          'at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
        ],
        msg: "informTimeout",
        who: "B",
      });

      return;
    } else {
      const {
        data: [],
        secs: v349,
        time: v348,
        didSend: v106,
        from: v347,
      } = txn6;
      const v352 = stdlib.addressEq(v304, v347);
      stdlib.assert(v352, {
        at: "./index.rsh:99:5:dot",
        fs: [],
        msg: "sender correct",
        who: "B",
      });
      const txn7 = await ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 8,
        out_tys: [ctc1, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false,
      });
      const {
        data: [v356, v357],
        secs: v359,
        time: v358,
        didSend: v116,
        from: v355,
      } = txn7;
      const v360 = stdlib.addressEq(v281, v355);
      stdlib.assert(v360, {
        at: "./index.rsh:108:5:dot",
        fs: [],
        msg: "sender correct",
        who: "B",
      });
      const v361 = stdlib.digest([ctc1, ctc1], [v356, v357]);
      const v362 = stdlib.digestEq(v325, v361);
      stdlib.assert(v362, {
        at: "reach standard library:69:17:application",
        fs: [
          'at ./index.rsh:109:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
        ],
        msg: null,
        who: "B",
      });
      const v363 = stdlib.eq(v357, v333);
      const v364 = v363
        ? stdlib.checkedBigNumberify(
            "./index.rsh:19:30:decimal",
            stdlib.UInt_max,
            "0"
          )
        : stdlib.checkedBigNumberify(
            "./index.rsh:19:34:decimal",
            stdlib.UInt_max,
            "1"
          );
      const v365 = stdlib.eq(
        v364,
        stdlib.checkedBigNumberify("./index.rsh:makeEnum", stdlib.UInt_max, "0")
      );
      const v366 = v365 ? v304 : v281;
      stdlib.protect(ctc2, await interact.seeOutcome(v364, v357, v333), {
        at: "./index.rsh:114:41:application",
        fs: [
          "at ./index.rsh:114:7:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)",
        ],
        msg: "seeOutcome",
        who: "B",
      });

      return;
    }
  }
}
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: [],
  },
  appApproval: `ByAPAAEECCAoAwYFMFgCgAFgoI0GJgMBAAEBACI1ADEYQQVbKmRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQAK2SSEHDEABpEmBBwxAASFJJQxAAKYlEkQlNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BUkiWzX9JVs1/IAENRoq0DT9FlA0/BZQsDT/MQASRDQDV1AgNP0WNPwWUAESRLEisgEjshIkshA0/zQDVzAgIyI0/DQDgXBbEk0iEk2yFDT+shGzsSKyATQDIQVbsggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgQkSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hBFs1/oAE4huzqbAyBjQDIQxbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAOBUFuyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgOvSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yEEWzX+IQVbNf1XMCA1/FdYIDX7gXhbNfqABGG0rAywMgY0AyEMWwxENP2IA800/DEAEkQ0/zT+FlA0/RZQNPxQNPtQNPoWUChLAVcAeGdIJTUBMgY1AkIDT0khCAxAAJJIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQRbNf4hBVs1/Vc4IDX8IQpbNftXYCA1+kk1BRc1+YAEgaqazzT5FlCwNPwxABJEMgY0AyEJWwg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4FlAoSwFXAH9nKUsBV38JZ0ghBzUBMgY1AkICtkghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf6ABJEnNPOwMgY0AyEKWw9ENP8xABI0A1c4IDEAEhFEsSKyATQDIQ1bshIkshA0/7IUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICKEkhCwxAAQpJIQYMQACISCEGNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEEWzX+IQVbNf0hCVs1/Fc4IDX7IQ1bNfpJNQU1+YAEE+7qUTT5ULAyBjQDIQpbDEQ0/zEAEkQ0/zT+FlA0/RZQNPwWUDT7UDT6FlA0+VAoSwFXAH9nKUsBV38BZ0ghCDUBMgY1AkIBrkghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQVbNf0hCVs1/Ek1BTX7gAQcT1NvNPtQsDIGNPwINfo0A1c4EVcAESJbNfk0/zT+FlA0/RZQNPwWUDEAUDT6FlA0+RZQKEsBVwBoZ0ghBjUBMgY1AkIBM0kjDEAAgEgjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+IQVbNf0hCVs1/Fc4ETX7gASai5F0sDT7VwARNfo0+zT6SSJbIwgWXABcADX5IzT+iAFBNP8xABJENP80/hZQNP0WUDT8FlA0+VAoSwFXAElnSCELNQEyBjUCQgCtSCEOiAD5IjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yVbNf6BEFs1/YEYWzX8gAT27avSNP8WUDT+FlA0/RZQNPwWULCBEa9JNftJVwARJa9cAFwANfohDogApLEisgEishIkshAyCrIUNP+yEbMxADT/FlA0/hZQNPwWUDT6UChLAVcASWdIIzUBMgY1AkIAHDEZIQgSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 11,
  warnings: [],
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
                "name": "v282",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v285",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "name": "v282",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v285",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
        "internalType": "struct T7",
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
                "internalType": "bool",
                "name": "v305",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v325",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v333",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
        "internalType": "struct T7",
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
                "internalType": "bool",
                "name": "v305",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
                "name": "v325",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v333",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "name": "v356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620022b5380380620022b5833981016040819052620000269162000405565b60008055436003556200003862000251565b6040805133815283516020808301919091528085015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a1805160009081905281516020908101829052825160409081018390528351828501805191909152805182516060810184528581528251518501519481019490945290515182015115159183019190915262000103929091620001a4565b6040820152620001163415600762000227565b6200012062000298565b33815260208084018051516001600160a01b031682840152805182015160408085019190915290516060908101519084015283810151608084015260016000819055439055516200017491839101620004d5565b604051602081830303815290604052600290805190602001906200019a929190620002db565b50505050620005bc565b620001ae6200036a565b60005b60018110156200020457848160018110620001d057620001d0620004bf565b6020020151828260018110620001ea57620001ea620004bf565b602002015280620001fb8162000555565b915050620001b1565b50818184600181106200021b576200021b620004bf565b60200201529392505050565b816200024d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620002846200036a565b8152602001620002936200036a565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002936200036a565b828054620002e9906200057f565b90600052602060002090601f0160209004810192826200030d576000855562000358565b82601f106200032857805160ff191683800117855562000358565b8280016001018555821562000358579182015b82811115620003585782518255916020019190600101906200033b565b5062000366929150620003b7565b5090565b60405180602001604052806001905b620003a0604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003795790505090565b5b80821115620003665760008155600101620003b8565b604051608081016001600160401b0381118282101715620003ff57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200041957600080fd5b604080519081016001600160401b03811182821017156200044a57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200046457600080fd5b6200046e620003ce565b60208501519092506001600160a01b03811681146200048c57600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b600181101562000549578251805183528581015186840152860151151586830152918401919083019060010162000517565b50505050505092915050565b60006000198214156200057857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059457607f821691505b60208210811415620005b657634e487b7160e01b600052602260045260246000fd5b50919050565b611ce980620005cc6000396000f3fe60806040526004361061009a5760003560e01c80638328d4c4116100615780638328d4c414610115578063a7661d5414610128578063ab53f2c61461013b578063bf2c5b241461015e578063c798003714610171578063f4cedab01461018457005b80631e93b0f1146100a35780632c10a159146100c75780633e59bac4146100da578063552d7b8e146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611696565b610197565b6100a16100e8366004611696565b6103f8565b6100a16100fb366004611696565b6105bb565b34801561010c57600080fd5b506001546100b4565b6100a16101233660046116b2565b610829565b6100a1610136366004611696565b610a4f565b34801561014757600080fd5b50610150610bd6565b6040516100be9291906116f0565b6100a161016c366004611696565b610c73565b6100a161017f366004611696565b610de4565b6100a1610192366004611696565b610fff565b6101a7600160005414600b611200565b6101c1813515806101ba57506001548235145b600c611200565b6000808055600280546101d39061172a565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061172a565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906118e4565b905061026e611504565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161029f929190611900565b60405180910390a16102b334156008611200565b6103418260800151600060405180606001604052806102ee87608001516000600181106102e2576102e2611938565b60200201515160010190565b8152602001866080015160006001811061030a5761030a611938565b6020020151602001518152602001866080015160006001811061032f5761032f611938565b60200201516040015115159052611226565b8152602082015161036090610359903390600161129a565b6009611200565b8151610378906001600160a01b03163314600a611200565b61038061151c565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015283516080840152600260005543600155516103cd9183910161194e565b604051602081830303815290604052600290805190602001906103f192919061155d565b5050505050565b610408600260005414600e611200565b6104228135158061041b57506001548235145b600f611200565b6000808055600280546104349061172a565b80601f01602080910402602001604051908101604052809291908181526020018280546104609061172a565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b50505050508060200190518101906104c591906118e4565b90506104dd6040518060200160405280600081525090565b7fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd338460405161050e929190611900565b60405180910390a16105223415600d611200565b6105304383606001516112b2565b81526040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a018981528d516001600160a01b039081168c528e8a0151169097528c8b0151909552928b015190915233909152875190915287015151519052600390915543600155915190916103cd918391016119cc565b6105cb600560005414601c611200565b6105e5813515806105de57506001548235145b601d611200565b6000808055600280546105f79061172a565b80601f01602080910402602001604051908101604052809291908181526020018280546106239061172a565b80156106705780601f1061064557610100808354040283529160200191610670565b820191906000526020600020905b81548152906001019060200180831161065357829003601f168201915b50505050508060200190518101906106889190611abc565b90506106a06040518060200160405280600081525090565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333846040516106d1929190611ad8565b60405180910390a16106e53415601a611200565b6080820151610700906001600160a01b03163314601b611200565b61070e4383606001516112b2565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b03908116825260208085015182168184015260408086015181850152608080870151909316606085015260a0808701519385019390935260c080870151938501939093528682013592840192909252835160e084015260066000554360015590516103cd9183910160006101008201905060018060a01b0380845116835280602085015116602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b610839600860005414602b611200565b6108538135158061084c57506001548235145b602c611200565b6000808055600280546108659061172a565b80601f01602080910402602001604051908101604052809291908181526020018280546108919061172a565b80156108de5780601f106108b3576101008083540402835291602001916108de565b820191906000526020600020905b8154815290600101906020018083116108c157829003601f168201915b50505050508060200190518101906108f69190611aff565b604080513381528435602080830191909152850135818301529084013560608201529091507f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a161095434156028611200565b805161096c906001600160a01b031633146029611200565b604080516109b89161099291602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826080015114602a611200565b6109f7816020015160008360a001518560200160200135146109db5760016109de565b60005b146109ea5782516109f0565b82606001515b6001611305565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a34573d6000803e3d6000fd5b5060008080556001819055610a4b906002906115e1565b5050565b610a5f6003600054146017611200565b610a7981351580610a7257506001548235145b6018611200565b600080805560028054610a8b9061172a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab79061172a565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b5050505050806020019051810190610b1c9190611abc565b9050610b308160a001514310156019611200565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610b61929190611900565b60405180910390a1610b7534156015611200565b8051610ba9906001600160a01b03163314610b9f5760808201516001600160a01b03163314610ba2565b60015b6016611200565b610bc0816020015182600001518360c00151611305565b60008080556001819055610a4b906002906115e1565b600060606000546002808054610beb9061172a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c179061172a565b8015610c645780601f10610c3957610100808354040283529160200191610c64565b820191906000526020600020905b815481529060010190602001808311610c4757829003601f168201915b50505050509050915091509091565b610c836006600054146025611200565b610c9d81351580610c9657506001548235145b6026611200565b600080805560028054610caf9061172a565b80601f0160208091040260200160405190810160405280929190818152602001828054610cdb9061172a565b8015610d285780601f10610cfd57610100808354040283529160200191610d28565b820191906000526020600020905b815481529060010190602001808311610d0b57829003601f168201915b5050505050806020019051810190610d409190611b8c565b9050610d548160e001514310156027611200565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610d85929190611900565b60405180910390a1610d9934156023611200565b8051610dcd906001600160a01b03163314610dc35760608201516001600160a01b03163314610dc6565b60015b6024611200565b610bc0816020015182600001518360800151611305565b610df46006600054146020611200565b610e0e81351580610e0757506001548235145b6021611200565b600080805560028054610e209061172a565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4c9061172a565b8015610e995780601f10610e6e57610100808354040283529160200191610e99565b820191906000526020600020905b815481529060010190602001808311610e7c57829003601f168201915b5050505050806020019051810190610eb19190611b8c565b9050610ec48160e0015143106022611200565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610ef5929190611900565b60405180910390a1610f0e81604001513414601e611200565b6060810151610f29906001600160a01b03163314601f611200565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b015182168a528f8f015189528f880151821687528f84015185528f8d015183526008909b55436001558d51998a019a909a52965189169b88019b909b52935192860192909252519094169383019390935291519481019490945251908301529060e0015b60405160208183030381529060405260029080519060200190610ff992919061155d565b50505050565b61100f6003600054146012611200565b6110298135158061102257506001548235145b6013611200565b60008080556002805461103b9061172a565b80601f01602080910402602001604051908101604052809291908181526020018280546110679061172a565b80156110b45780601f10611089576101008083540402835291602001916110b4565b820191906000526020600020905b81548152906001019060200180831161109757829003601f168201915b50505050508060200190518101906110cc9190611abc565b90506110df8160a0015143106014611200565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051611110929190611ad8565b60405180910390a161112434156010611200565b805161113c906001600160a01b031633146011611200565b6111976040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015182168184015260408085015181850152606080860151908501526080808601519093169284019290925260c08085015160a085015285820135908401526005600055436001559051610fd5918391016119cc565b81610a4b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b61122e61161e565b60005b600181101561127a5784816001811061124c5761124c611938565b602002015182826001811061126357611263611938565b60200201528061127281611c47565b915050611231565b508181846001811061128e5761128e611938565b60200201529392505050565b60006112a88385308561131e565b90505b9392505050565b6000826112bf8382611c62565b91508110156112ff5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161121d565b92915050565b6113108383836113f8565b61131957600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161138591611c7a565b60006040518083038185875af1925050503d80600081146113c2576040519150601f19603f3d011682016040523d82523d6000602084013e6113c7565b606091505b50915091506113d8828260016114c9565b50808060200190518101906113ed9190611c96565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161145791611c7a565b60006040518083038185875af1925050503d8060008114611494576040519150601f19603f3d011682016040523d82523d6000602084013e611499565b606091505b50915091506114aa828260026114c9565b50808060200190518101906114bf9190611c96565b9695505050505050565b606083156114d85750816112ab565b8251156114e85782518084602001fd5b60405163100960cb60e01b81526004810183905260240161121d565b604051806020016040528061151761161e565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200161151761161e565b8280546115699061172a565b90600052602060002090601f01602090048101928261158b57600085556115d1565b82601f106115a457805160ff19168380011785556115d1565b828001600101855582156115d1579182015b828111156115d15782518255916020019190600101906115b6565b506115dd929150611669565b5090565b5080546115ed9061172a565b6000825580601f106115fd575050565b601f01602090049060005260206000209081019061161b9190611669565b50565b60405180602001604052806001905b611653604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161162d5790505090565b5b808211156115dd576000815560010161166a565b60006040828403121561169057600080fd5b50919050565b6000604082840312156116a857600080fd5b6112ab838361167e565b60006060828403121561169057600080fd5b60005b838110156116df5781810151838201526020016116c7565b83811115610ff95750506000910152565b82815260406020820152600082518060408401526117158160608501602087016116c4565b601f01601f1916919091016060019392505050565b600181811c9082168061173e57607f821691505b6020821081141561169057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156117985761179861175f565b60405290565b6040516020810167ffffffffffffffff811182821017156117985761179861175f565b6040516060810167ffffffffffffffff811182821017156117985761179861175f565b80516001600160a01b03811681146117fb57600080fd5b919050565b801515811461161b57600080fd5b600060e0828403121561182057600080fd5b611828611775565b9050611833826117e4565b815260206118428184016117e4565b81830152604080840151818401526060808501518185015285609f86011261186957600080fd5b61187161179e565b8060e087018881111561188357600080fd5b608088015b818110156118d25784818b0312156118a05760008081fd5b6118a86117c1565b815181528782015188820152868201516118c181611800565b818801528452928601928401611888565b50506080860152509295945050505050565b600060e082840312156118f657600080fd5b6112ab838361180e565b6001600160a01b03831681528135602080830191909152606082019083013561192881611800565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156119c05782518051835285810151868401528601511515868301529184019190830190600101611990565b50505050505092915050565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519091169082015260a0808301519082015260c0808301519082015260e081016112ff565b600060e08284031215611a3757600080fd5b60405160e0810181811067ffffffffffffffff82111715611a5a57611a5a61175f565b604052905080611a69836117e4565b8152611a77602084016117e4565b60208201526040830151604082015260608301516060820152611a9c608084016117e4565b608082015260a083015160a082015260c083015160c08201525092915050565b600060e08284031215611ace57600080fd5b6112ab8383611a25565b6001600160a01b0383168152606081016112ab602083018480358252602090810135910152565b600060c08284031215611b1157600080fd5b60405160c0810181811067ffffffffffffffff82111715611b3457611b3461175f565b604052611b40836117e4565b8152611b4e602084016117e4565b602082015260408301516040820152611b69606084016117e4565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610100808385031215611ba057600080fd5b6040519081019067ffffffffffffffff82118183101715611bc357611bc361175f565b81604052611bd0846117e4565b8152611bde602085016117e4565b602082015260408401516040820152611bf9606085016117e4565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415611c5b57611c5b611c31565b5060010190565b60008219821115611c7557611c75611c31565b500190565b60008251611c8c8184602087016116c4565b9190910192915050565b600060208284031215611ca857600080fd5b81516112ab8161180056fea264697066735822122000e3a2cb5ed32670742307284ed4c0b06b52d344dd385e654ca0fd01400c620164736f6c634300080c0033`,
  BytecodeLen: 8885,
  Which: `oD`,
  version: 8,
  views: {},
};
export const _stateSourceMap = {
  1: {
    at: "./index.rsh:71:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  2: {
    at: "./index.rsh:74:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./index.rsh:80:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  4: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./index.rsh:88:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
    ],
    msg: null,
    who: "Module",
  },
  5: {
    at: "./index.rsh:90:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  6: {
    at: "./index.rsh:98:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  7: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./index.rsh:100:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
    ],
    msg: null,
    who: "Module",
  },
  8: {
    at: "./index.rsh:102:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  9: {
    at: "./index.rsh:115:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
};
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH,
};
export const _Participants = {
  A: A,
  B: B,
};
export const _APIs = {};
