import React, {useState} from 'react'
import SeeOutcome from '../components/SeeOutcome'
import Ticket from '../components/Ticket'

const Aview = ({data,buyTicket, price, text, src, submit, numOfTic, nftId, seeResult}) => {
  const [join, setJoin] = useState(false)
const handleSubmit = () => {
  submit()
  setJoin(true)
}
  const {see} = seeResult
  return (
    <div className='section'>
        {/* nft propeties */}
       
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

     { !join &&  <button className='button click mb-5' onClick={handleSubmit}>Join Raffle</button>}

      
    {/* buy ticket */}
        {buyTicket && <div>
          <h1 className='text-center mb-3'>Buy a Ticket</h1>
          <div className='buy-ticket'>
          <Ticket 
         src={src}
         submit={submit}
         num={1}
         />
          <Ticket 
         src={src}
         submit={submit}
         num={2}
         />
         <Ticket 
         src={src}
         submit={submit}
         num={3}
         />
         <Ticket 
         src={src}
         submit={submit}
         num={4}
         />
         <Ticket 
         src={src}
         submit={submit}
         num={5}
         />
          </div>
        </div>}

        {/* SeeOutcome */}
        {see && <SeeOutcome 
        seeResult={seeResult}
        />}
    </div>
  )
}



export default Aview