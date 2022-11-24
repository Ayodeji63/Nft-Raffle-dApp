/***
 * **NFT RAFFLE API**
 * OWNER ~
 * 1. Launch NFT
 * 2. Set A Winning Num
 * 3. Set Ticket Price
 * 4. Number of Tickets
 * 5. Deadline For Raffle
 * 6. Start Raffle
 * 7. See winner
 * 8. Transfer NFT to winner or back to Owner
 *
 *
 * APIs ~
 * 1. Pay for Ticket
 * 2. Transfer to Owner
 * 3. Get the Ticket
 * 4. See winning Number
 */

"reach 0.1";
"use strict";

const amt = 1;
export const main = Reach.App(() => {
  const Owner = Participant("Owner", {
    ...hasRandom,
    settingRaffle: Fun(
      [],
      Object({
        nftId: Token,
        numTickets: UInt,
        ticketPrice: UInt,
        deadline: UInt,
      })
    ),
    winningNum: UInt,
    startRaffle: Fun([], Null),
    seeWinner: Fun([Address, UInt], Null),
  });
  const Bob = API("Bob", {
    getTicket: Fun([UInt], Tuple(Address, UInt)),
    sRaffleNum: Fun([Address, UInt], Null),
  });
  init();
  Owner.only(() => {
    const { nftId, numTickets, ticketPrice, deadline } = declassify(
      interact.settingRaffle()
    );
    const _winningNum = interact.winningNum;
    const [_commitO, _saltO] = makeCommitment(interact, _winningNum);
    const commitO = declassify(_commitO);
    interact.startRaffle();
  });
  Owner.publish(nftId, numTickets, ticketPrice, deadline, commitO);
  commit();
  Owner.pay([[amt, nftId]]);

  const Bobs = new Map(UInt);
  const end = lastConsensusTime() + deadline;
  const [howMany, ticketsold, owner] = parallelReduce([0, 0, Owner])
    .invariant(balance(nftId) == amt)
    .invariant(balance() == 0)
    .while(lastConsensusTime() <= end)
    .api_(Bob.getTicket, (ticket) => {
      check(isNone(Bobs[this]), "sorry you buy ticket twice");
      return [
        ticketPrice,
        (ret) => {
          Bobs[this] = ticket;
          transfer(ticketPrice).to(Owner);
          const who = this;
          ret([owner, ticket]);
          // Owner.interact.seeWinner(this, ticket);
          return [howMany + 1, ticketsold + 1, who];
        },
      ];
    })
    .api_(Bob.sRaffleNum, (bob, num) => {
      check(isSome(Bobs[this]), "Sory you didn't get a ticket");
      return [
        0,
        (ret) => {
          ret(null);
          Owner.only(() => {
            const saltO = declassify(_saltO);
            const winningNum = declassify(_winningNum);
          });
          commit();
          Owner.publish(saltO, winningNum);
          checkCommitment(commitO, saltO, winningNum);
          if (num != winningNum) {
            delete Bobs[this];
          }
          return [howMany - 1, ticketsold - 1, bob];
        },
      ];
    });
  transfer(amt, nftId).to(owner);
  commit();
  exit();
});
