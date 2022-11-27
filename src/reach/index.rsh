"reach 0.1";

const [isOutcome, B_WON, B_LOSS] = makeEnum(2);
const [
  isWinningNum,
  ONE,
  TW0,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
] = makeEnum(10);

const result = (raffleNum, bNum) => {
  return raffleNum == bNum ? 0 : 1;
};

assert(result(THREE, FOUR) == B_LOSS);
assert(result(FIVE, SIX) == B_LOSS);
assert(result(SEVEN, SEVEN) == B_WON);
assert(result(THREE, THREE) == B_WON);

forall(UInt, (raffleNum) =>
  forall(UInt, (bNum) => assert(isOutcome(result(raffleNum, bNum))))
);

forall(UInt, (num) => assert(result(num, num) == B_WON));

const common = {
  ...hasRandom,
  seeOutcome: Fun([UInt, UInt, UInt], Null),
  informTimeout: Fun([], Null),
};

const amt = 1;
export const main = Reach.App(() => {
  const A = Participant("A", {
    ...common,
    deadline: UInt,
    price: UInt,
    setRaffle: Fun(
      [],
      Object({
        nftId: Token,
        numOfTic: UInt,
      })
    ),
    raffleNum: Fun([], UInt),
  });
  const B = Participant("B", {
    ...common,
    seeParam: Fun([UInt, UInt, Token], Null),
    bNum: Fun([UInt], UInt),
  });
  init();

  const informTimeout = () => {
    each([A, B], () => interact.informTimeout());
  };

  A.only(() => {
    const deadline = declassify(interact.deadline);
    const price = declassify(interact.price);
    const { nftId, numOfTic } = declassify(interact.setRaffle());
  });
  A.publish(nftId, price, numOfTic, deadline);
  commit();

  A.pay([[amt, nftId]]);
  commit();

  B.only(() => {
    const seeParam = declassify(interact.seeParam(price, numOfTic, nftId));
  });
  B.publish(seeParam);
  commit();

  A.only(() => {
    const _raffleNum = interact.raffleNum();
    const [_commitA, _saltA] = makeCommitment(interact, _raffleNum);
    const commitA = declassify(_commitA);
  });
  A.publish(commitA).timeout(relativeTime(deadline), () =>
    closeTo(A, informTimeout, [[balance(nftId), nftId]])
  );
  commit();
  //
  unknowable(B, A(_saltA, _raffleNum));

  B.only(() => {
    const bNum = declassify(interact.bNum(numOfTic));
  });
  B.publish(bNum);
  commit();
  B.pay(price).timeout(relativeTime(deadline), () =>
    closeTo(A, informTimeout, [[balance(nftId), nftId]])
  );
  commit();

  A.only(() => {
    const saltA = declassify(_saltA);
    const raffleNum = declassify(_raffleNum);
  });
  A.publish(saltA, raffleNum);
  checkCommitment(commitA, saltA, raffleNum);

  const outcome = result(raffleNum, bNum);
  transfer(amt, nftId).to(outcome == B_WON ? B : A);
  transfer(price).to(A);
  each([A, B], () => interact.seeOutcome(outcome, raffleNum, bNum));
  commit();
  exit();
});
