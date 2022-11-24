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
      3: [ctc0, ctc1, ctc2, ctc2, ctc5, ctc6],
      4: [ctc0, ctc1, ctc2, ctc6, ctc0, ctc2, ctc2, ctc2],
      6: [ctc0, ctc1, ctc6, ctc0, ctc2],
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
    price: ctc0,
  });
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc6]);
  const ctc8 = stdlib.T_Array(
    ctc7,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );

  const v200 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false,
  ];
  const v201 = [v200];
  const v216 = stdlib.protect(
    ctc0,
    interact.deadline,
    "for A's interact field deadline"
  );

  const v219 = stdlib.protect(ctc2, await interact.setRaffle(), {
    at: "./index.rsh:65:69:application",
    fs: [
      "at ./index.rsh:63:9:application call to [unknown function] (defined at: ./index.rsh:63:13:function exp)",
    ],
    msg: "setRaffle",
    who: "A",
  });
  const v220 = v219.nftId;
  const v221 = v219.numOfTic;
  const v222 = v219.price;

  const txn1 = await ctc.sendrecv({
    args: [v220, v222, v221, v216],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./index.rsh:67:5:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc0],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:67:5:decimal",
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
        data: [v227, v228, v229, v230],
        secs: v232,
        time: v231,
        didSend: v61,
        from: v226,
      } = txn1;

      const v233 =
        v201[
          stdlib.checkedBigNumberify(
            "./index.rsh:67:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v234 = stdlib.Array_set(
        v233,
        "0",
        stdlib.checkedBigNumberify("./index.rsh:67:5:dot", stdlib.UInt_max, "0")
      );
      const v235 = stdlib.Array_set(
        v201,
        stdlib.checkedBigNumberify(
          "./index.rsh:67:5:dot",
          stdlib.UInt_max,
          "0"
        ),
        v234
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v227,
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
    data: [v227, v228, v229, v230],
    secs: v232,
    time: v231,
    didSend: v61,
    from: v226,
  } = txn1;
  const v233 =
    v201[
      stdlib.checkedBigNumberify("./index.rsh:67:5:dot", stdlib.UInt_max, "0")
    ];
  const v234 = stdlib.Array_set(
    v233,
    "0",
    stdlib.checkedBigNumberify("./index.rsh:67:5:dot", stdlib.UInt_max, "0")
  );
  const v235 = stdlib.Array_set(
    v201,
    stdlib.checkedBigNumberify("./index.rsh:67:5:dot", stdlib.UInt_max, "0"),
    v234
  );
  const txn2 = await ctc.sendrecv({
    args: [v226, v227, v228, v230, v235],
    evt_cnt: 0,
    funcNum: 1,
    lct: v231,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify("./index.rsh:69:5:dot", stdlib.UInt_max, "0"),
      [
        [
          stdlib.checkedBigNumberify(
            "./index.rsh:39:13:decimal",
            stdlib.UInt_max,
            "1"
          ),
          v227,
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
        secs: v239,
        time: v238,
        didSend: v68,
        from: v237,
      } = txn2;

      const v240 =
        v235[
          stdlib.checkedBigNumberify(
            "./index.rsh:69:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v241 =
        v240[
          stdlib.checkedBigNumberify(
            "./index.rsh:69:5:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v242 = stdlib.add(
        v241,
        stdlib.checkedBigNumberify(
          "./index.rsh:39:13:decimal",
          stdlib.UInt_max,
          "1"
        )
      );
      const v244 = stdlib.Array_set(v240, "0", v242);
      const v245 = stdlib.Array_set(
        v235,
        stdlib.checkedBigNumberify(
          "./index.rsh:69:5:dot",
          stdlib.UInt_max,
          "0"
        ),
        v244
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify(
          "./index.rsh:39:13:decimal",
          stdlib.UInt_max,
          "1"
        ),
        kind: "to",
        tok: v227,
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
    secs: v239,
    time: v238,
    didSend: v68,
    from: v237,
  } = txn2;
  const v240 =
    v235[
      stdlib.checkedBigNumberify("./index.rsh:69:5:dot", stdlib.UInt_max, "0")
    ];
  const v241 =
    v240[
      stdlib.checkedBigNumberify("./index.rsh:69:5:dot", stdlib.UInt_max, "0")
    ];
  const v242 = stdlib.add(
    v241,
    stdlib.checkedBigNumberify(
      "./index.rsh:39:13:decimal",
      stdlib.UInt_max,
      "1"
    )
  );
  const v244 = stdlib.Array_set(v240, "0", v242);
  const v245 = stdlib.Array_set(
    v235,
    stdlib.checkedBigNumberify("./index.rsh:69:5:dot", stdlib.UInt_max, "0"),
    v244
  );
  const v246 = stdlib.addressEq(v226, v237);
  stdlib.assert(v246, {
    at: "./index.rsh:69:5:dot",
    fs: [],
    msg: "sender correct",
    who: "A",
  });
  const v249 = stdlib.protect(ctc0, await interact.raffleNum(), {
    at: "./index.rsh:72:42:application",
    fs: [
      "at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:13:function exp)",
    ],
    msg: "raffleNum",
    who: "A",
  });
  const v250 = stdlib.protect(ctc0, await interact.random(), {
    at: "reach standard library:64:31:application",
    fs: [
      'at ./index.rsh:73:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)',
      "at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:13:function exp)",
    ],
    msg: "random",
    who: "A",
  });
  const v251 = stdlib.digest([ctc0, ctc0], [v250, v249]);

  const txn3 = await ctc.sendrecv({
    args: [v226, v227, v228, v230, v245, v251],
    evt_cnt: 1,
    funcNum: 2,
    lct: v238,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:76:5:decimal",
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
        data: [v254],
        secs: v256,
        time: v255,
        didSend: v82,
        from: v253,
      } = txn3;

      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0, ctc0, ctc8, ctc3],
    waitIfNotPresent: false,
  });
  const {
    data: [v254],
    secs: v256,
    time: v255,
    didSend: v82,
    from: v253,
  } = txn3;
  const v257 = stdlib.addressEq(v226, v253);
  stdlib.assert(v257, {
    at: "./index.rsh:76:5:dot",
    fs: [],
    msg: "sender correct",
    who: "A",
  });
  const txn4 = await ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false,
  });
  const {
    data: [v262],
    secs: v264,
    time: v263,
    didSend: v91,
    from: v261,
  } = txn4;
  const v271 = stdlib.safeAdd(v263, v230);
  const v273 =
    v245[
      stdlib.checkedBigNumberify(
        "./index.rsh:85:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v274 =
    v273[
      stdlib.checkedBigNumberify(
        "./index.rsh:85:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const txn5 = await ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: ["time", v271],
    waitIfNotPresent: false,
  });
  if (txn5.didTimeout) {
    const txn6 = await ctc.sendrecv({
      args: [v226, v227, v228, v254, v261, v262, v271, v274],
      evt_cnt: 0,
      funcNum: 5,
      lct: v263,
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
      sim_p: async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [],
          secs: v317,
          time: v316,
          didSend: v155,
          from: v315,
        } = txn6;

        sim_r.txns.push({
          kind: "from",
          to: v226,
          tok: v227,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: v227,
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
      tys: [ctc5, ctc1, ctc0, ctc3, ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false,
    });
    const {
      data: [],
      secs: v317,
      time: v316,
      didSend: v155,
      from: v315,
    } = txn6;
    const v318 = stdlib.addressEq(v226, v315);
    const v319 = stdlib.addressEq(v261, v315);
    const v320 = v318 ? true : v319;
    stdlib.assert(v320, {
      at: "reach standard library:197:11:dot",
      fs: [
        'at ./index.rsh:85:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "sender correct",
      who: "A",
    });
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: "./index.rsh:61:46:application",
      fs: [
        "at ./index.rsh:61:9:application call to [unknown function] (defined at: ./index.rsh:61:21:function exp)",
        'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:60:28:function exp)',
        'at ./index.rsh:85:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "informTimeout",
      who: "A",
    });

    return;
  } else {
    const {
      data: [],
      secs: v277,
      time: v276,
      didSend: v98,
      from: v275,
    } = txn5;
    const v280 = stdlib.addressEq(v261, v275);
    stdlib.assert(v280, {
      at: "./index.rsh:84:5:dot",
      fs: [],
      msg: "sender correct",
      who: "A",
    });
    const txn6 = await ctc.sendrecv({
      args: [v226, v227, v254, v261, v262, v250, v249],
      evt_cnt: 2,
      funcNum: 6,
      lct: v276,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [
        stdlib.checkedBigNumberify(
          "./index.rsh:93:5:decimal",
          stdlib.UInt_max,
          "0"
        ),
        [],
      ],
      sim_p: async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [v288, v289],
          secs: v291,
          time: v290,
          didSend: v112,
          from: v287,
        } = txn6;

        const v295 = stdlib.eq(v289, v262);
        const v296 = v295
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
        const v297 = stdlib.eq(
          v296,
          stdlib.checkedBigNumberify(
            "./index.rsh:makeEnum",
            stdlib.UInt_max,
            "0"
          )
        );
        const v298 = v297 ? v261 : v226;
        sim_r.txns.push({
          kind: "from",
          to: v298,
          tok: v227,
        });

        sim_r.txns.push({
          kind: "halt",
          tok: v227,
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
      tys: [ctc5, ctc1, ctc3, ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false,
    });
    const {
      data: [v288, v289],
      secs: v291,
      time: v290,
      didSend: v112,
      from: v287,
    } = txn6;
    const v292 = stdlib.addressEq(v226, v287);
    stdlib.assert(v292, {
      at: "./index.rsh:93:5:dot",
      fs: [],
      msg: "sender correct",
      who: "A",
    });
    const v293 = stdlib.digest([ctc0, ctc0], [v288, v289]);
    const v294 = stdlib.digestEq(v254, v293);
    stdlib.assert(v294, {
      at: "reach standard library:69:17:application",
      fs: [
        'at ./index.rsh:94:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
      ],
      msg: null,
      who: "A",
    });
    const v295 = stdlib.eq(v289, v262);
    const v296 = v295
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
    const v297 = stdlib.eq(
      v296,
      stdlib.checkedBigNumberify("./index.rsh:makeEnum", stdlib.UInt_max, "0")
    );
    const v298 = v297 ? v261 : v226;
    stdlib.protect(ctc4, await interact.seeOutcome(v296), {
      at: "./index.rsh:98:41:application",
      fs: [
        "at ./index.rsh:98:7:application call to [unknown function] (defined at: ./index.rsh:98:19:function exp)",
      ],
      msg: "seeOutcome",
      who: "A",
    });

    return;
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );

  const v200 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false,
  ];
  const v201 = [v200];
  const txn1 = await ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false,
  });
  const {
    data: [v227, v228, v229, v230],
    secs: v232,
    time: v231,
    didSend: v61,
    from: v226,
  } = txn1;
  const v233 =
    v201[
      stdlib.checkedBigNumberify("./index.rsh:67:5:dot", stdlib.UInt_max, "0")
    ];
  const v234 = stdlib.Array_set(
    v233,
    "0",
    stdlib.checkedBigNumberify("./index.rsh:67:5:dot", stdlib.UInt_max, "0")
  );
  const v235 = stdlib.Array_set(
    v201,
    stdlib.checkedBigNumberify("./index.rsh:67:5:dot", stdlib.UInt_max, "0"),
    v234
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
    secs: v239,
    time: v238,
    didSend: v68,
    from: v237,
  } = txn2;
  const v240 =
    v235[
      stdlib.checkedBigNumberify("./index.rsh:69:5:dot", stdlib.UInt_max, "0")
    ];
  const v241 =
    v240[
      stdlib.checkedBigNumberify("./index.rsh:69:5:dot", stdlib.UInt_max, "0")
    ];
  const v242 = stdlib.add(
    v241,
    stdlib.checkedBigNumberify(
      "./index.rsh:39:13:decimal",
      stdlib.UInt_max,
      "1"
    )
  );
  const v244 = stdlib.Array_set(v240, "0", v242);
  const v245 = stdlib.Array_set(
    v235,
    stdlib.checkedBigNumberify("./index.rsh:69:5:dot", stdlib.UInt_max, "0"),
    v244
  );
  const v246 = stdlib.addressEq(v226, v237);
  stdlib.assert(v246, {
    at: "./index.rsh:69:5:dot",
    fs: [],
    msg: "sender correct",
    who: "B",
  });
  const txn3 = await ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false,
  });
  const {
    data: [v254],
    secs: v256,
    time: v255,
    didSend: v82,
    from: v253,
  } = txn3;
  const v257 = stdlib.addressEq(v226, v253);
  stdlib.assert(v257, {
    at: "./index.rsh:76:5:dot",
    fs: [],
    msg: "sender correct",
    who: "B",
  });
  const v260 = stdlib.protect(ctc1, await interact.bNum(v228, v229, v227), {
    at: "./index.rsh:80:42:application",
    fs: [
      "at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)",
    ],
    msg: "bNum",
    who: "B",
  });

  const txn4 = await ctc.sendrecv({
    args: [v226, v227, v228, v230, v245, v254, v260],
    evt_cnt: 1,
    funcNum: 3,
    lct: v255,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:82:5:decimal",
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
        data: [v262],
        secs: v264,
        time: v263,
        didSend: v91,
        from: v261,
      } = txn4;

      const v271 = stdlib.safeAdd(v263, v230);
      const v273 =
        v245[
          stdlib.checkedBigNumberify(
            "./index.rsh:85:40:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v274 =
        v273[
          stdlib.checkedBigNumberify(
            "./index.rsh:85:40:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1, ctc7, ctc2, ctc1],
    waitIfNotPresent: false,
  });
  const {
    data: [v262],
    secs: v264,
    time: v263,
    didSend: v91,
    from: v261,
  } = txn4;
  const v271 = stdlib.safeAdd(v263, v230);
  const v273 =
    v245[
      stdlib.checkedBigNumberify(
        "./index.rsh:85:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v274 =
    v273[
      stdlib.checkedBigNumberify(
        "./index.rsh:85:40:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const txn5 = await ctc.sendrecv({
    args: [v226, v227, v228, v254, v261, v262, v271, v274],
    evt_cnt: 0,
    funcNum: 4,
    lct: v263,
    onlyIf: true,
    out_tys: [],
    pay: [v228, []],
    sim_p: async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [],
        secs: v277,
        time: v276,
        didSend: v98,
        from: v275,
      } = txn5;

      sim_r.txns.push({
        amt: v228,
        kind: "to",
        tok: undefined /* Nothing */,
      });
      sim_r.txns.push({
        kind: "from",
        to: v226,
        tok: undefined /* Nothing */,
      });
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: ["time", v271],
    tys: [ctc4, ctc0, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1],
    waitIfNotPresent: false,
  });
  if (txn5.didTimeout) {
    const txn6 = await ctc.sendrecv({
      args: [v226, v227, v228, v254, v261, v262, v271, v274],
      evt_cnt: 0,
      funcNum: 5,
      lct: v263,
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
      sim_p: async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => {
          sim_txn_ctr = sim_txn_ctr.sub(1);
          return sim_txn_ctr;
        };

        const {
          data: [],
          secs: v317,
          time: v316,
          didSend: v155,
          from: v315,
        } = txn6;

        sim_r.txns.push({
          kind: "from",
          to: v226,
          tok: v227,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: v227,
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
      tys: [ctc4, ctc0, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1],
      waitIfNotPresent: false,
    });
    const {
      data: [],
      secs: v317,
      time: v316,
      didSend: v155,
      from: v315,
    } = txn6;
    const v318 = stdlib.addressEq(v226, v315);
    const v319 = stdlib.addressEq(v261, v315);
    const v320 = v318 ? true : v319;
    stdlib.assert(v320, {
      at: "reach standard library:197:11:dot",
      fs: [
        'at ./index.rsh:85:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "sender correct",
      who: "B",
    });
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: "./index.rsh:61:46:application",
      fs: [
        "at ./index.rsh:61:9:application call to [unknown function] (defined at: ./index.rsh:61:21:function exp)",
        'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:60:28:function exp)',
        'at ./index.rsh:85:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
      ],
      msg: "informTimeout",
      who: "B",
    });

    return;
  } else {
    const {
      data: [],
      secs: v277,
      time: v276,
      didSend: v98,
      from: v275,
    } = txn5;
    const v280 = stdlib.addressEq(v261, v275);
    stdlib.assert(v280, {
      at: "./index.rsh:84:5:dot",
      fs: [],
      msg: "sender correct",
      who: "B",
    });
    const txn6 = await ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 6,
      out_tys: [ctc1, ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v288, v289],
      secs: v291,
      time: v290,
      didSend: v112,
      from: v287,
    } = txn6;
    const v292 = stdlib.addressEq(v226, v287);
    stdlib.assert(v292, {
      at: "./index.rsh:93:5:dot",
      fs: [],
      msg: "sender correct",
      who: "B",
    });
    const v293 = stdlib.digest([ctc1, ctc1], [v288, v289]);
    const v294 = stdlib.digestEq(v254, v293);
    stdlib.assert(v294, {
      at: "reach standard library:69:17:application",
      fs: [
        'at ./index.rsh:94:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)',
      ],
      msg: null,
      who: "B",
    });
    const v295 = stdlib.eq(v289, v262);
    const v296 = v295
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
    const v297 = stdlib.eq(
      v296,
      stdlib.checkedBigNumberify("./index.rsh:makeEnum", stdlib.UInt_max, "0")
    );
    const v298 = v297 ? v261 : v226;
    stdlib.protect(ctc3, await interact.seeOutcome(v296), {
      at: "./index.rsh:98:41:application",
      fs: [
        "at ./index.rsh:98:7:application call to [unknown function] (defined at: ./index.rsh:98:19:function exp)",
      ],
      msg: "seeOutcome",
      who: "B",
    });

    return;
  }
}
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: [],
  },
  appApproval: `ByANAAEEIAgDBigwAgV4oI0GJgMBAAEBACI1ADEYQQQ4KmRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxAAixJIQoMQAEQSSEGDEAAlSEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BUkiWzX9IQRbNfyABEohy/w0/RZQNPwWULA0/zEAEkQ0A1coIDT9FjT8FlABEkSxIrIBI7ISJLIQNP80A1dIICMiNPw0A4FoWxJNIhJNshQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgMWSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/yVbNf6ABMyZklywMgY0AyELWw9ENP8xABI0A1dQIDEAEhFEsSKyATQDgYABW7ISJLIQNP+yFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAqJJJAxAAIdIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8lWzX+IQdbNf1XMCA1/FdQIDX7gXBbNfqABJEnNPOwMgY0AyELWwxENP2IArw0+zEAEkSxIrIBNP2yCCOyEDT/sgezNP80/hZQNPxQNPtQNPoWUChLAVcAcGdIIQY1ATIGNQJCAjFIIQU0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8lWzX+IQdbNf1XSSA1/Ek1BRc1+4AE1Axs1jT7FlCwMgY0AyEIWwg1+jQDVzgRVwARIls1+TT/NP4WUDT9FlA0/FAxAFA0+xZQNPoWUDT5FlAoSwFXAH9nKUsBV38JZ0gkNQEyBjUCQgGpSSMMQAD0SSEJDEAAbkghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQdbNf0hCFs1/Fc4ETX7STUFNfqABJm/5Zo0+lCwNP8xABJENP80/hZQNP0WUDT8FlA0+1A0+lAoSwFXAGlnSCEFNQEyBjUCQgEuSCM0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/iEHWzX9IQhbNfxXOBE1+4AEmouRdLA0+1cAETX6NPs0+kkiWyMIFlwAXAA1+SM0/ogBQzT/MQASRDT/NP4WUDT9FlA0/BZQNPlQKEsBVwBJZ0ghCTUBMgY1AkIAr0ghDIgA+yI0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBFs1/oEQWzX9gRhbNfyABPbtq9I0/xZQNP4WUDT9FlA0/BZQsIERr0k1+0lXABEhBK9cAFwANfohDIgApLEisgEishIkshAyCrIUNP+yEbMxADT/FlA0/hZQNPwWUDT6UChLAVcASWdIIzUBMgY1AkIAHDEZIQoSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v227",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v228",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v229",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v230",
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
                "name": "v227",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v228",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v229",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v230",
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
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
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
                "name": "v262",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v289",
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
    "name": "_reach_e6",
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
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
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
                "name": "v262",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v289",
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
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001ecb38038062001ecb833981016040819052620000269162000405565b60008055436003556200003862000251565b6040805133815283516020808301919091528085015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a1805160009081905281516020908101829052825160409081018390528351828501805191909152805182516060810184528581528251518501519481019490945290515182015115159183019190915262000103929091620001a4565b6040820152620001163415600762000227565b6200012062000298565b33815260208084018051516001600160a01b031682840152805182015160408085019190915290516060908101519084015283810151608084015260016000819055439055516200017491839101620004d5565b604051602081830303815290604052600290805190602001906200019a929190620002db565b50505050620005bc565b620001ae6200036a565b60005b60018110156200020457848160018110620001d057620001d0620004bf565b6020020151828260018110620001ea57620001ea620004bf565b602002015280620001fb8162000555565b915050620001b1565b50818184600181106200021b576200021b620004bf565b60200201529392505050565b816200024d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620002846200036a565b8152602001620002936200036a565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002936200036a565b828054620002e9906200057f565b90600052602060002090601f0160209004810192826200030d576000855562000358565b82601f106200032857805160ff191683800117855562000358565b8280016001018555821562000358579182015b82811115620003585782518255916020019190600101906200033b565b5062000366929150620003b7565b5090565b60405180602001604052806001905b620003a0604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003795790505090565b5b80821115620003665760008155600101620003b8565b604051608081016001600160401b0381118282101715620003ff57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200041957600080fd5b604080519081016001600160401b03811182821017156200044a57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200046457600080fd5b6200046e620003ce565b60208501519092506001600160a01b03811681146200048c57600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b600181101562000549578251805183528581015186840152860151151586830152918401919083019060010162000517565b50505050505092915050565b60006000198214156200057857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059457607f821691505b60208210811415620005b657634e487b7160e01b600052602260045260246000fd5b50919050565b6118ff80620005cc6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146100ea5780638e314769146100ff578063a7661d5414610112578063ab53f2c614610125578063f4cedab01461014857005b80631e93b0f11461008d57806321642639146100b15780632c10a159146100c457806345f70396146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf3660046112a2565b61015b565b61008b6100d23660046112cc565b610343565b61008b6100e53660046112cc565b6105a4565b3480156100f657600080fd5b5060015461009e565b61008b61010d3660046112cc565b61075b565b61008b6101203660046112cc565b6108cc565b34801561013157600080fd5b5061013a610ae5565b6040516100a8929190611314565b61008b6101563660046112cc565b610b82565b61016b6006600054146021610dd6565b6101858135158061017e57506001548235145b6022610dd6565b6000808055600280546101979061134e565b80601f01602080910402602001604051908101604052809291908181526020018280546101c39061134e565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190611401565b604080513381528435602080830191909152850135818301529084013560608201529091507fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f9060800160405180910390a16102863415601e610dd6565b805161029e906001600160a01b03163314601f610dd6565b604080516102ea916102c491602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260400151146020610dd6565b61032981602001516000836080015185602001602001351461030d576001610310565b60005b1461031c578251610322565b82606001515b6001610dfc565b6000808055600181905561033f906002906110da565b5050565b610353600160005414600b610dd6565b61036d8135158061036657506001548235145b600c610dd6565b60008080556002805461037f9061134e565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061134e565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050806020019051810190610410919061159f565b905061041a611117565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161044b9291906115bb565b60405180910390a161045f34156008610dd6565b6104ed82608001516000604051806060016040528061049a876080015160006001811061048e5761048e6115f3565b60200201515160010190565b815260200186608001516000600181106104b6576104b66115f3565b602002015160200151815260200186608001516000600181106104db576104db6115f3565b60200201516040015115159052610e15565b8152602082015161050c906105059033906001610e89565b6009610dd6565b8151610524906001600160a01b03163314600a610dd6565b61052c61112f565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260608086015190840152835160808401526002600055436001555161057991839101611647565b6040516020818303038152906040526002908051906020019061059d929190611170565b5050505050565b6105b4600260005414600f610dd6565b6105ce813515806105c757506001548235145b6010610dd6565b6000808055600280546105e09061134e565b80601f016020809104026020016040519081016040528092919081815260200182805461060c9061134e565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b5050505050806020019051810190610671919061159f565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516106a4929190611695565b60405180910390a16106b83415600d610dd6565b80516106d0906001600160a01b03163314600e610dd6565b6106d86111f4565b81516001600160a01b039081168252602080840151909116818301526040808401518184015260608085015190840152608080850151908401528482013560a084015260036000554360015551610731918391016116bc565b60405160208183030381529060405260029080519060200190610755929190611170565b50505050565b61076b600460005414601b610dd6565b6107858135158061077e57506001548235145b601c610dd6565b6000808055600280546107979061134e565b80601f01602080910402602001604051908101604052809291908181526020018280546107c39061134e565b80156108105780601f106107e557610100808354040283529160200191610810565b820191906000526020600020905b8154815290600101906020018083116107f357829003601f168201915b50505050508060200190518101906108289190611715565b905061083c8160c00151431015601d610dd6565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161086d9291906115bb565b60405180910390a161088134156019610dd6565b80516108b5906001600160a01b031633146108ab5760808201516001600160a01b031633146108ae565b60015b601a610dd6565b610329816020015182600001518360e00151610dfc565b6108dc6004600054146016610dd6565b6108f6813515806108ef57506001548235145b6017610dd6565b6000808055600280546109089061134e565b80601f01602080910402602001604051908101604052809291908181526020018280546109349061134e565b80156109815780601f1061095657610100808354040283529160200191610981565b820191906000526020600020905b81548152906001019060200180831161096457829003601f168201915b50505050508060200190518101906109999190611715565b90506109ac8160c0015143106018610dd6565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516109dd9291906115bb565b60405180910390a16109f6816040015134146014610dd6565b6080810151610a11906001600160a01b031633146015610dd6565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a4e573d6000803e3d6000fd5b506040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d86015187528d840151821685528d8b015183526006909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c001610731565b600060606000546002808054610afa9061134e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b269061134e565b8015610b735780601f10610b4857610100808354040283529160200191610b73565b820191906000526020600020905b815481529060010190602001808311610b5657829003601f168201915b50505050509050915091509091565b610b926003600054146012610dd6565b610bac81351580610ba557506001548235145b6013610dd6565b600080805560028054610bbe9061134e565b80601f0160208091040260200160405190810160405280929190818152602001828054610bea9061134e565b8015610c375780601f10610c0c57610100808354040283529160200191610c37565b820191906000526020600020905b815481529060010190602001808311610c1a57829003601f168201915b5050505050806020019051810190610c4f91906117ba565b9050610c676040518060200160405280600081525090565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13384604051610c98929190611695565b60405180910390a1610cac34156011610dd6565b610cba438360600151610ea1565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151909116818301526040808501519083015260a0808501516060840152336080808501919091529186013590830152825160c08301528301516000602090810291909101515160e08301526004600055436001556040516105799183910160006101008201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401528060808501511660808401525060a083015160a083015260c083015160c083015260e083015160e083015292915050565b8161033f5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610e07838383610ef4565b610e1057600080fd5b505050565b610e1d611242565b60005b6001811015610e6957848160018110610e3b57610e3b6115f3565b6020020151828260018110610e5257610e526115f3565b602002015280610e618161185d565b915050610e20565b5081818460018110610e7d57610e7d6115f3565b60200201529392505050565b6000610e9783853085610fc5565b90505b9392505050565b600082610eae8382611878565b9150811015610eee5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610df3565b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610f5391611890565b60006040518083038185875af1925050503d8060008114610f90576040519150601f19603f3d011682016040523d82523d6000602084013e610f95565b606091505b5091509150610fa68282600261109f565b5080806020019051810190610fbb91906118ac565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161102c91611890565b60006040518083038185875af1925050503d8060008114611069576040519150601f19603f3d011682016040523d82523d6000602084013e61106e565b606091505b509150915061107f8282600161109f565b508080602001905181019061109491906118ac565b979650505050505050565b606083156110ae575081610e9a565b8251156110be5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610df3565b5080546110e69061134e565b6000825580601f106110f6575050565b601f016020900490600052602060002090810190611114919061128d565b50565b604051806020016040528061112a611242565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200161112a611242565b82805461117c9061134e565b90600052602060002090601f01602090048101928261119e57600085556111e4565b82601f106111b757805160ff19168380011785556111e4565b828001600101855582156111e4579182015b828111156111e45782518255916020019190600101906111c9565b506111f092915061128d565b5090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611235611242565b8152602001600081525090565b60405180602001604052806001905b611277604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816112515790505090565b5b808211156111f0576000815560010161128e565b6000606082840312156112b457600080fd5b50919050565b6000604082840312156112b457600080fd5b6000604082840312156112de57600080fd5b610e9a83836112ba565b60005b838110156113035781810151838201526020016112eb565b838111156107555750506000910152565b82815260406020820152600082518060408401526113398160608501602087016112e8565b601f01601f1916919091016060019392505050565b600181811c9082168061136257607f821691505b602082108114156112b457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156113bc576113bc611383565b60405290565b6040516060810167ffffffffffffffff811182821017156113bc576113bc611383565b80516001600160a01b03811681146113fc57600080fd5b919050565b600060a0828403121561141357600080fd5b60405160a0810181811067ffffffffffffffff8211171561143657611436611383565b604052611442836113e5565b8152611450602084016113e5565b60208201526040830151604082015261146b606084016113e5565b6060820152608083015160808201528091505092915050565b801515811461111457600080fd5b600082601f8301126114a357600080fd5b6114ab611399565b806060808501868111156114be57600080fd5b855b8181101561150f578281890312156114d85760008081fd5b6114e06113c2565b81518152602080830151818301526040808401516114fd81611484565b908301529086529094019382016114c0565b50919695505050505050565b600060e0828403121561152d57600080fd5b60405160a0810181811067ffffffffffffffff8211171561155057611550611383565b60405290508061155f836113e5565b815261156d602084016113e5565b602082015260408301516040820152606083015160608201526115938460808501611492565b60808201525092915050565b600060e082840312156115b157600080fd5b610e9a838361151b565b6001600160a01b0383168152813560208083019190915260608201908301356115e381611484565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b8060005b600181101561075557815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161160d565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e083019161168e90840182611609565b5092915050565b6001600160a01b038316815260608101610e9a602083018480358252602090810135910152565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015161010083019161170490840182611609565b5060a083015160e083015292915050565b600061010080838503121561172957600080fd5b6040519081019067ffffffffffffffff8211818310171561174c5761174c611383565b81604052611759846113e5565b8152611767602085016113e5565b6020820152604084015160408201526060840151606082015261178c608085016113e5565b608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600061010082840312156117cd57600080fd5b60405160c0810181811067ffffffffffffffff821117156117f0576117f0611383565b6040526117fc836113e5565b815261180a602084016113e5565b602082015260408301516040820152606083015160608201526118308460808501611492565b608082015260e0929092015160a083015250919050565b634e487b7160e01b600052601160045260246000fd5b600060001982141561187157611871611847565b5060010190565b6000821982111561188b5761188b611847565b500190565b600082516118a28184602087016112e8565b9190910192915050565b6000602082840312156118be57600080fd5b8151610e9a8161148456fea2646970667358221220c7aa1d64bbfea7c5a785a9d4e634d52bc9d72b52b8bfee66cea15a3c459a320e64736f6c634300080c0033`,
  BytecodeLen: 7883,
  Which: `oD`,
  version: 8,
  views: {},
};
export const _stateSourceMap = {
  1: {
    at: "./index.rsh:68:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  2: {
    at: "./index.rsh:70:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./index.rsh:77:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  4: {
    at: "./index.rsh:83:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  5: {
    at: "reach standard library:199:11:after expr stmt semicolon",
    fs: [
      'at ./index.rsh:85:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)',
    ],
    msg: null,
    who: "Module",
  },
  6: {
    at: "./index.rsh:88:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  7: {
    at: "./index.rsh:99:11:after expr stmt semicolon",
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
