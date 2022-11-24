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
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

const amt = 1;
export const main = Reach.App(() => {
  const A = Participant("A", {
    ...common,
    deadline: UInt,
    setRaffle: Fun(
      [],
      Object({
        nftId: Token,
        price: UInt,
        numOfTic: UInt,
      })
    ),
    raffleNum: Fun([], UInt),
  });
  const B = Participant("B", {
    ...common,
    bNum: Fun([UInt, UInt, Token], UInt),
  });
  init();

  const informTimeout = () => {
    each([A, B], () => interact.informTimeout());
  };
  A.only(() => {
    const deadline = declassify(interact.deadline);
    const { nftId, price, numOfTic } = declassify(interact.setRaffle());
  });
  A.publish(nftId, price, numOfTic, deadline);
  commit();
  A.pay([[amt, nftId]]);
  commit();
  A.only(() => {
    const _raffleNum = interact.raffleNum();
    const [_commitA, _saltA] = makeCommitment(interact, _raffleNum);
    const commitA = declassify(_commitA);
  });
  A.publish(commitA);
  commit();
  unknowable(B, A(_saltA, _raffleNum));
  B.only(() => {
    const bNum = declassify(interact.bNum(price, numOfTic, nftId));
  });
  B.publish(bNum);
  commit();
  B.pay(price).timeout(relativeTime(deadline), () =>
    closeTo(A, informTimeout, [[balance(nftId), nftId]])
  );
  transfer(price).to(A);
  commit();
  A.only(() => {
    const saltA = declassify(_saltA);
    const raffleNum = declassify(_raffleNum);
  });
  A.publish(saltA, raffleNum);
  checkCommitment(commitA, saltA, raffleNum);

  const outcome = result(raffleNum, bNum);
  transfer(amt, nftId).to(outcome == B_WON ? B : A);
  each([A, B], () => interact.seeOutcome(outcome));
  commit();
  exit();
});
