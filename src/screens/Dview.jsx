import React, { useState } from 'react'
import Header from '../components/Header'
import SeeOutcome from '../components/SeeOutcome'
import { views } from '../utils'
import img from './5.webp'
const Dview = () => {


 
  return (
    <section>
        <Header />
        <h1>This is deployer section</h1>
    </section>
  )
}

export const SetRaffle = ({deploy, nftId, setNftId, price, setPrice, numOfTic, setNumOFTic, reach, }) => {
    const [wager, setWager] = useState(0)

    return (
        <div className='section'>
          <div className="input">
              <div className='sect'>
                <label htmlFor="">NFT ID</label>
                <input type={'number'}
                value = {nftId}
                onChange={(e) => setNftId(e.target.value)}
                min={0}
                    />
              </div>

               <div className='sect'>
                <label htmlFor="">Ticket Price</label>
                <input type={'number'}
                value = {price}
                onChange={(e) => setPrice(e.target.value)}
                min={0}
                    />
              </div>

               <div className='sect'>
                <label htmlFor="">Number of Tickets</label>
                <input type={'number'}
                value = {numOfTic}
                onChange={(e) => setNumOFTic(e.target.value)}
                min={0}
                    />
              </div>
         
          </div>
           <button className="button" onClick={() => deploy(wager)}>
              Set Raffle
          </button>
        </div>
    )
}

export const RafflePage = ({src, name, raffleNum, rafNum, setRafNum, nftId, numOfTic, price, data, seeResult}) => {
const {see, text} = seeResult;
  return (
    <div className='section'>

        <div className='info'>
       <img src={`https://${src}.ipfs.dweb.link/`} alt="" />
           <div className='flex flex-col ml-3'>
                <p>Nft Id: <span>{`${nftId}`}</span> </p>
                        <p>Number Of Tickets: <span>{`${numOfTic}`}</span></p>
                        <p>Ticket Price: <span>{`${price}`} Algo</span></p>
                         {data && <p className=''>Name: <span>{data.name}</span></p>}
                            <p>Nft Worth: <span>400 Algo</span></p>
                </div>
             
        </div>
         {!see && <div className='sect'>
          <label htmlFor="">Input Raffle Number</label>
          <input type={'number'} value={rafNum} onChange={(e) => setRafNum(e.target.value)} min={0} />
          <button className='button ' onClick={() => raffleNum(rafNum)}>Raffle Number</button>
                </div>}
          
          {see && <SeeOutcome 
          seeResult={seeResult}
          />}
    </div>
  )
}
export default Dview