import React, { useState } from 'react'
import Header from '../components/Header'
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

export const RafflePrams = ({nftId, setNftId, price, setPrice, numOfTic, setNumOFTic, deadline, setDeadline, submit, img}) => {
const [id, setId] = useState(0)

const handleSubmit = (e) => {
  e.preventDefault()
  submit();
}
  return (
    <div className='set-params'>
      <div className='form'>
    <div>
      {img && <img src={`https://${img}.ipfs.dweb.link/`} className='h-[300px]'/>}
 </div>

 <div className='input'>
   <div className='sect'>
   <label htmlFor="">NFT ID:</label>
   <input type="text" value={nftId} className='input' placeholder='Input the nft id' onChange={(e) => setNftId(Number(e.target.value))} />
   </div>

    <div className='sect'>
   <label htmlFor="">Price:</label>
   <input type="text" value={price} className='input' placeholder='Input the nft id' onChange={(e) => setPrice(Number(e.target.value))} />
 </div>

   <div className='sect'>
   <label htmlFor="">Number Of Tickets:</label>
   <input type="text" value={numOfTic} className='input' placeholder='Input the nft id' onChange={(e) => setNumOFTic(Number(e.target.value))} />
 </div>

 <div className='sect'>
   <label htmlFor="">Deadline:</label>
   <input type="text" value={deadline} className='input' placeholder='Input the nft id' onChange={(e) => setDeadline(Number(e.target.value))} />
 </div>

 <div className='sect'>
  <button className='button' onClick={handleSubmit}>Start Raffle</button>
 </div>

 </div>

      </div>
    </div>
  )
}

// export const SetRaffle = ({deploy, nftId, setNftId, price, setPrice, numOfTic, setNumOFTic}) => {
//     const [wager, setWager] = useState(0)

//     return (
//         <div className='form'>
//           <div className="input">
//               <div className='sect'>
//                 <input type={'number'}
//                 value = {nftId}
//                 onChange={(e) => setNftId(e.target.value)}
//                 min={0}
//                     />
//               </div>

//                <div className='sect'>
//                 <input type={'number'}
//                 value = {price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 min={0}
//                     />
//               </div>

//                <div className='sect'>
//                 <input type={'number'}
//                 value = {numOfTic}
//                 onChange={(e) => setNumOFTic(e.target.value)}
//                 min={0}
//                     />
//               </div>
//           <button className="button" onClick={() => deploy(wager)}>
//               Set Wager
//           </button>
//           </div>
//         </div>
//     )
// }

export const RafflePage = ({src, name, raffleNum}) => {
  const [Num, setNum] = useState(0)
  return (
    <div>
      <div className='img-div'>
        <img src={src} alt="" />
        <div>
          <p className='imgName'>{name}</p>
        </div>
      </div>

      <div>
        <label htmlFor="">Input Raffle Number</label>
        <input type={'number'} value={Num} min={0} />
      </div>
      <button onClick={() => raffleNum(Num)}>Raffle Number</button>
    </div>
  )
}
export default Dview