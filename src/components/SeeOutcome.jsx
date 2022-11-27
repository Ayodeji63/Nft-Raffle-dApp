import React from 'react'

const SeeOutcome = ({seeResult}) => {
    const {raffleNum, bNum, text} = seeResult;
  return (
    <div className=''>
        <h1>Final Result: <span>{text}</span></h1>
        <h1>Raffle Number was: <span>{raffleNum}</span></h1>
        <h1>Player Picked: <span>{bNum}</span></h1>
    </div>
  )
}

export default SeeOutcome