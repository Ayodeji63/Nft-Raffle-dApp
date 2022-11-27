import React, {useState} from "react";
export const RafflePrams = ({nftId, setNftId, price, setPrice, numOfTic, setNumOFTic, deadline, setDeadline, submit, img}) => {
  console.log(submit);
const [id, setId] = useState(0)
  return (
    <div className='set-params'>
      <form className='form'>
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
  <button className='button' onClick={() => submit()}>Start Raffle</button>
 </div>

 </div>

      </form>
    </div>
  )
}